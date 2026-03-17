import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
    getSimulatedStatus,
    msUntilNextStatus,
    STATUS_STEPS,
    STATUS_LABELS,
    STATUS_COLOR,
} from "../utils/orderStatus.js";
import { userStore } from "../Store/userStore.js";

function OrderDetail() {
    const { updateOrderStatus } = userStore();
    const { state } = useLocation();
    const navigate = useNavigate();
    const order = state?.order;
    const justPlaced = state?.justPlaced;

    // Live status — recalculates from createdAt timestamp
    const [status, setStatus] = useState(
        justPlaced ? "confirmed" : order ? getSimulatedStatus(order?.createdAt) : "confirmed"
    );

    useEffect(() => {
        if (!order?.createdAt) return;
        const scheduleNext = () => {
            const ms = msUntilNextStatus(order?.createdAt);
            if (ms === null) return;

            const timer = setTimeout(() => {
                const newStatus = getSimulatedStatus(order.createdAt);
                setStatus(newStatus);
                updateOrderStatus(order._id, newStatus);
                scheduleNext();
            }, ms);

            return timer;
        };

        const timer = scheduleNext();
        return () => clearTimeout(timer);
    }, [order?.createdAt]);

    if (!order) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
                <div className="text-center">
                    <p className="text-2xl font-bold text-gray-700">Order not found</p>
                    <button
                        onClick={() => navigate("/")}
                        className="mt-4 px-6 py-2 bg-black text-white rounded-sm"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    const currentStep = STATUS_STEPS.indexOf(status);

    const placedDate = new Date(order.createdAt).toLocaleDateString("en-US", {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
    });
    const deliveryDate = new Date(order.estimatedDelivery).toLocaleDateString("en-US", {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    const today = new Date();
    const deliveryDateObj = new Date(order.estimatedDelivery);
    const daysRemaining = Math.max(
        0,
        Math.ceil((deliveryDateObj - today) / (1000 * 60 * 60 * 24))
    );

    const items = order.products || order.items || [];

    return (
        <div className="min-h-screen bg-[#faf8f5] select-none">
            <header className="sticky top-0 z-20 bg-[#faf8f5]/90 backdrop-blur-sm border-b border-gray-200 px-6 py-3 flex items-center gap-4">
                <h1 className="text-xl font-bold tracking-tight">Order Details</h1>
                <p className="text-xs text-gray-500">{order._id}</p>
            </header>

            <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">

                {justPlaced && (
                    <div className="bg-green-50 border border-green-200 rounded-lg px-5 py-4 flex items-center gap-3">
                        <span className="text-3xl">🎉</span>
                        <div>
                            <p className="font-bold text-green-800">Order Placed Successfully!</p>
                            <p className="text-sm text-green-600">
                                We'll update your order status automatically.
                            </p>
                        </div>
                    </div>
                )}

                {/* Delivery timeline card */}
                <div className="bg-linear-to-br from-[#dd957a] to-[#eee2ca] rounded-xl px-6 py-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#7a4a35] mb-1">
                        {status === "delivered"
                            ? "Delivered"
                            : `Arriving in ${daysRemaining} day${daysRemaining !== 1 ? "s" : ""}`}
                    </p>
                    <p className="text-2xl font-bold text-[#3d1f13]">{deliveryDate}</p>
                    <p className="text-xs text-[#7a4a35] mt-1">Placed on {placedDate}</p>
                </div>

                {/* Live status tracker */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-base">Order Status</h2>
                        {status !== "delivered" && (
                            <span className="flex items-center gap-1.5 text-xs text-green-600 font-semibold">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Live
                            </span>
                        )}
                    </div>

                    <div className="flex items-center justify-between relative">
                        <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-200 z-0">
                            <div
                                className="h-full bg-[#b48068] transition-all duration-1000"
                                style={{
                                    width: `${(currentStep / (STATUS_STEPS.length - 1)) * 100}%`,
                                }}
                            />
                        </div>

                        {STATUS_STEPS.map((step, i) => {
                            const isCompleted = i <= currentStep;
                            const isCurrent = i === currentStep;
                            return (
                                <div key={step} className="flex flex-col items-center gap-2 z-10">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-700 ${isCompleted
                                        ? "bg-[#b48068] border-[#b48068] text-white"
                                        : "bg-white border-gray-300 text-gray-400"
                                        } ${isCurrent && status !== "delivered" ? "ring-2 ring-[#b48068]/40 ring-offset-1" : ""}`}>
                                        {isCompleted ? "✓" : i + 1}
                                    </div>
                                    <p className={`text-[0.65rem] text-center max-w-15 leading-tight font-semibold ${isCompleted ? "text-[#b48068]" : "text-gray-400"
                                        }`}>
                                        {STATUS_LABELS[step]}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-5 flex justify-center">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${STATUS_COLOR[status]}`}>
                            {STATUS_LABELS[status]}
                        </span>
                    </div>
                </div>
                {/* Review prompt */}
                {status === "delivered" && (
                    <div className="bg-white rounded-xl border border-green-200 p-5 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">⭐</span>
                            <h2 className="font-bold text-base">How was your order?</h2>
                        </div>
                        <p className="text-sm text-gray-500">
                            Share your thoughts on the items you received.
                        </p>
                        <div className="flex flex-col gap-2">
                            {items.map((item, i) => (
                                <button
                                    key={item._id || i}
                                    onClick={() => navigate(`/ProductDetail/${item.product}`, {
                                        state: { openReview: true }
                                    })}
                                    className="w-full flex items-center gap-3 px-3 py-2 border border-gray-200 rounded-lg hover:border-[#b48068] hover:bg-[#b48068]/5 transition-colors cursor-default text-left"
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-10 h-10 rounded-md object-cover shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold line-clamp-1">{item.name}</p>
                                        <p className="text-xs text-gray-400">Tap to leave a review</p>
                                    </div>
                                    <span className="text-[#b48068] text-xs font-semibold shrink-0">
                                        Review →
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {/* Delivery address */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h2 className="font-bold text-base mb-3">Delivery Address</h2>
                    <p className="text-sm text-gray-700 leading-relaxed">{order.location}</p>
                    <p className="text-sm text-gray-500 mt-1">{order.number}</p>
                </div>

                {/* Items */}
                <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                    <div className="px-5 py-4">
                        <h2 className="font-bold text-base">Items ({items.length})</h2>
                    </div>
                    {items.map((item, i) => (
                        <div key={item._id || i} className="px-5 py-4 flex items-center gap-4">
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-14 h-14 rounded-md object-cover shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm line-clamp-1">{item.name}</p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    Size: {item.size} · Qty: {item.quantity}
                                </p>
                            </div>
                            <p className="font-bold text-sm shrink-0">
                                ${(item.discountedPrice * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Price */}
                <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-2.5">
                    <h2 className="font-bold text-base mb-1">Payment Summary</h2>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Total Paid</span>
                        <span className="font-bold">${order.totalPrice}</span>
                    </div>
                </div>

                <button
                    onClick={() => navigate("/")}
                    className="w-full py-3 border-2 border-black text-black font-bold rounded-sm hover:bg-black hover:text-white transition-colors cursor-default"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}

export default OrderDetail;