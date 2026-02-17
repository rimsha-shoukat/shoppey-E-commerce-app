import mongoose from "mongoose";

// order schema
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            size: { type: String, required: true },
            quantity: { type: Number, required: true, min: 1, default: 1 },
        }
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Shipped", "Delivered", "Cancelled"], default: "Pending" },
    review: { type: mongoose.Schema.Types.ObjectId, ref: "Review", default: null },
    coupons: {
        type: [String],
        trim: true,
    },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;