import mongoose from "mongoose";

// product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
        minlength: [3, "Product name must be at least 3 characters long."],
        maxlength: [100, "Product name cannot exceed 100 characters."],
    },
    price: {
        type: Number,
        required: [true, "Please provide a price for this product."],
        min: [0, "Price cannot be negative."],
    },
    category: {
        type: String,
        enum: ["men", "women", "kids"],
        required: [true, "Please provide category of the product"],
    },
    stock: {
        type: Number,
        required: [true, "Please provide stock for this product."],
        min: [0, "Stock cannot be negative."],
    },
    orderCount: {
        type: Number,
        default: 0,
        min: 0,
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
        default: 0,
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
    }],
}, { timestamps: true });


const Product = mongoose.model("Product", productSchema);
export default Product;