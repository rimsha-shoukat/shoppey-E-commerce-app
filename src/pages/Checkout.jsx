import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserProvider.jsx";
import { ProductsContext } from "../utils/ProductsProvider.jsx";
import { userStore } from "../Store/userStore.js";
import { PopUp } from "../utils/popupMessage.jsx";

function Checkout() {
    const { user } = useContext(UserContext);
    const { clearCart, addOrder, cartDiscount, clearCartDiscount } = userStore();
    const { products, discounts } = useContext(ProductsContext);
    const navigate = useNavigate();
    const [popupMsg, setPopupMsg] = useState(null);

    const getDiscountedPrice = (price, category) => {
        const discount = discounts?.find((dis) => dis.category == category);
        return discount?.percent
            ? parseFloat((price - (price * discount.percent) / 100).toFixed(2))
            : parseFloat(price?.toFixed(2));
    };

    const cartItemsList =
        user?.cart?.map((item) => {
            const productDetails = products.find(
                (p) => String(p._id) === String(item.product)
            );
            const discountedPrice = getDiscountedPrice(
                productDetails?.price,
                productDetails?.category
            );
            return {
                ...item,
                name: productDetails?.name,
                imageUrl: productDetails?.imageUrl,
                category: productDetails?.category,
                price: productDetails?.price,
                discountedPrice,
                stock: productDetails?.stock,
            };
        }) || [];

    const subtotal = cartItemsList.reduce(
        (sum, item) => sum + item.discountedPrice * item.quantity,
        0
    );
    const deliveryFee = 20;
    const total = subtotal + deliveryFee - cartDiscount;

    const today = new Date();
    const deliveryStart = new Date(today);
    deliveryStart.setDate(today.getDate() + 5);
    const deliveryEnd = new Date(today);
    deliveryEnd.setDate(today.getDate() + 7);
    const formatDate = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

    const handlePlaceOrder = async () => {
        const missingFields = [];
        if (!user?.name) missingFields.push("name");
        if (!user?.location) missingFields.push("address");
        if (!user?.number) missingFields.push("phone number");

        if (missingFields.length > 0) {
            setPopupMsg(
                `Please complete your profile: ${missingFields.join(", ")} missing`
            );
            setTimeout(() => {
                navigate("/User", {
                    state: { showCompleteAlert: true, missingFields },
                });
            }, 2000);
            return;
        }

        const newOrder = {
            products: cartItemsList,
            totalPrice: total.toFixed(2),
            status: "confirmed",
            estimatedDelivery: deliveryEnd.toISOString(),
            location: user?.location,
            number: user?.number,
        };

        await addOrder(newOrder);
        await clearCart();
        clearCartDiscount();
        const savedOrder = userStore.getState().user?.userOrders?.[0];
        navigate("/OrderDetail", {
            state: {
                order: savedOrder || newOrder,
                justPlaced: true
            }
        })
    };

    if (cartItemsList.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
                <div className="text-center">
                    <p className="text-2xl font-bold text-gray-700">Your cart is empty</p>
                    <button
                        onClick={() => navigate("/")}
                        className="mt-4 px-6 py-2 bg-black text-white rounded-sm"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#faf8f5] select-none">
            {popupMsg && <PopUp popupMsg={popupMsg} setPopupMsg={setPopupMsg} />}

            {/* Header */}
            <header className="sticky top-0 z-10 bg-[#faf8f5]/90 backdrop-blur-sm border-b border-gray-200 px-6 py-3 flex items-center gap-4">
                <h1 className="text-xl font-bold tracking-tight">Order Summary</h1>
            </header>

            <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-8">

                <div className="bg-linear-to-r from-[#dd957a] to-[#eee2ca] rounded-lg px-6 py-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#7a4a35]">
                            Estimated Delivery
                        </p>
                        <p className="text-2xl font-bold text-[#3d1f13] mt-1">
                            {formatDate(deliveryStart)} – {formatDate(deliveryEnd)}
                        </p>
                    </div>
                    <div className="text-5xl">📦</div>
                </div>

                {/* User info card */}
                <div className="bg-white rounded-lg border border-gray-200 p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Delivering To</h2>
                        <button
                            onClick={() => navigate("/User")}
                            className="text-sm text-[#b48068] underline underline-offset-2"
                        >
                            Edit
                        </button>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-gray-700">
                        <p className="font-semibold text-base text-gray-900">
                            {user?.name || (
                                <span className="text-red-500">⚠ Name missing</span>
                            )}
                        </p>
                        <p>
                            {user?.location || (
                                <span className="text-red-500">⚠ Address missing</span>
                            )}
                        </p>
                        <p>
                            {user?.number || (
                                <span className="text-red-500">⚠ Phone missing</span>
                            )}
                        </p>
                        <p className="text-gray-500">{user?.email}</p>
                    </div>
                </div>

                {/* Items list */}
                <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
                    <div className="px-5 py-4">
                        <h2 className="font-bold text-lg">
                            Items ({cartItemsList.length})
                        </h2>
                    </div>
                    {cartItemsList.map((item) => (
                        <div key={item?._id} className="px-5 py-4 flex items-center gap-4">
                            <img
                                src={item?.imageUrl}
                                alt={item?.name}
                                className="w-16 h-16 rounded-md object-cover shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm line-clamp-1">{item?.name}</p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    Size: {item.size} · Qty: {item.quantity}
                                </p>
                            </div>
                            <div className="text-right shrink-0">
                                <p className="font-bold text-sm">
                                    ${(item?.discountedPrice * item?.quantity).toFixed(2)}
                                </p>
                                {item?.price !== item?.discountedPrice && (
                                    <p className="text-xs text-gray-400 line-through">
                                        ${(item?.price * item?.quantity).toFixed(2)}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col gap-3">
                    <h2 className="font-bold text-lg mb-1">Price Details</h2>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Delivery fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
                {cartDiscount > 0 && (
                    <div className="flex justify-between text-sm text-green-600 font-semibold">
                        <span>Coupon discount</span>
                        <span>-${cartDiscount.toFixed(2)}</span>
                    </div>
                )}
                <button
                    onClick={handlePlaceOrder}
                    className="w-full py-4 bg-black text-white font-bold text-lg rounded-sm hover:bg-gray-900 transition-colors cursor-default"
                >
                    Place Order · ${total.toFixed(2)}
                </button>
            </div>
        </div>
    );
}

export default Checkout;