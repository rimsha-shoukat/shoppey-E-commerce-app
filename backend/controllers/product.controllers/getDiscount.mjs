import Discount from "../../models/discount.model.mjs";

async function getDiscount(req, res) {
    try {
        const discounts = await Discount.find({});
        return res.status(200).json({ message: "Discounts fetch successfull", discounts });
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default getDiscount;