import mongoose from "mongoose";

// discount schema
const discountSchema = new mongoose.Schema({
    percent: {
        type: Number,
        min: [0, "Discount can't be less than 0."],
        max: [100, "Discount can't be grater than 100."],
        default: 0,
    },
    category: {
        type: String,
        enum: ["Men", "Women", "Kids"],
        required: [true, "Please provide category for Product"],
    },
}, { timestamps: true });


const Discount = mongoose.model("Discount", discountSchema);
export default Discount;