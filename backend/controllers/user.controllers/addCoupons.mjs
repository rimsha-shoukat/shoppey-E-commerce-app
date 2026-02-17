import User from "../../models/user.model.mjs";

async function addCoupons(req, res) {
    try {
        const { coupons } = req.body;
        if (!coupons) {
            return res.status(400).json({ message: "Coupons are required" });
        }
        const user = await User.findById(req.user._id);

        // filter existed coupons
        const newCoupons = coupons.filter(
            (coupon) => !user.coupons.includes(coupon)
        );

        if (newCoupons.length === 0) {
            return res.status(400).json({
                message: "All coupons already exist"
            });
        }

        // add coupons to user and save
        user.coupons.push([...newCoupons])
        await user.save();
        return res.status(200).json({ message: "Coupons added successfully" });
    } catch (error) {
        console.log("Something went wrong in addCoupons controller", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default addCoupons;