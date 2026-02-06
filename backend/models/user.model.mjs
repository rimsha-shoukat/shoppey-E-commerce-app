import mongoose from "mongoose";


// user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters long"],
        maxLength: [50, "Name must be less than 24 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters long"],
        trim: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
    saved: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }],
    carts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    }],
    location: {
        type: String,
        trim: true,
    },
    number: {
        type: String,
        trim: true,
    },
    rank: {
        type: String,
        enum: ["Customer", "Wholesaler"],
        default: "Customer",
    },
    coupons: {
        type:[String],
        trim: true,
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;