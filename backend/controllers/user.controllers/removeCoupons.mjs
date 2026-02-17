import User from "../../models/user.model.mjs";

async function removeCoupons(req, res) {
    try {
        const { coupons } = req.body;
        if (!coupons) {
            return res.status(400).json({ message: "Coupons are required" });
        }

        // find user, remove coupons and save user
        const user = await User.findById(req.user._id);
        user.coupons = user.coupons.filter(coupon => !coupons.includes(coupon));
        await user.save();
        return res.status(200).json({ message: "Coupons removed successfully" });
    } catch (error) {
        console.log("Something went wrong in removeCoupons controller", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default removeCoupons;