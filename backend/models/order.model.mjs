import mongoose from "mongoose";

// order schema
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Shipped", "Delivered"], default: "Pending" },
    review: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    coupons: {
        type: [String],
        trim: true,
    },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;