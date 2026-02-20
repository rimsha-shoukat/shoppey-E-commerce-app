import Discount from "../../models/discount.model.mjs";

async function setDiscount(req, res) {
    try {
        const { thumbnail, category, discount } = req.body;
        const discounts = await Discount.findOneAndUpdate(category, { percent: discount }, { thumbnail });
        return res.status(200).json({ message: "Discount added successfully", discounts });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default setDiscount;