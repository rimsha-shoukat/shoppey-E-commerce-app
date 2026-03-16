import mongoose from "mongoose";

// order schema
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: { type: Array, required: true },
    totalPrice: { type: String, required: true },
    status: { type: String, default: "confirmed" },
    estimatedDelivery: { type: String },
    location: { type: String },
    number: { type: String },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;