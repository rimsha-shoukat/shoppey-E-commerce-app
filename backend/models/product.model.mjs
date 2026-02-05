import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    text: {
        type: String,
        required: [true, "Comment can't be empty."],
        trim: true,
    },
}, { timestamps: true });
const Comment = mongoose.model("Comment", commentSchema);


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Please provide a price for this product."],
        min: [0, "Price cannot be negative."],
    },
    discount: {
        type: Number,
        default: 0,
        min: [0, "Discount cannot be negative."],
        max: [100, "Discount cannot be greater than 100."],
    },
    category: {
        type: String,
        required: [true, "Please provide a category for this product."],
        trim: true,
    },
    stock: {
        type: Number,
        required: [true, "Please provide stock for this product."],
        min: [0, "Stock cannot be negative."],
    },
    deal: {
        type: Boolean,
        default: false,
    },
    orderCount: {
        type: Number,
        default: 0,
        min: 0,
    },
    sizes: {
        type: [String],
        default: [],
    },
    imageUrl: {
        type: String,
        required: [true, "Please provide an image URL for this product."],
        trim: true,
        match: [/^https?:\/\//, "Please provide a valid image URL"],
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: [],
    }],
}, { timestamps: true });


const Product = mongoose.model("Product", productSchema);
export default Product;