import User from "../../models/user.model.mjs";

async function addCoupons(req, res) {
    try {
        const { coupons } = req.body;
        if (!coupons) {
            return res.status(400).json({ message: "Coupons are required" });
        }
        const user = await User.findById(req.user._id);
        user.coupons = [...user.coupons, ...coupons];
        await user.save();
        return res.status(200).json({ message: "Coupons added successfully" });
    } catch (error) {
        console.log("Something went wrong in addCoupons controller", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default addCoupons;