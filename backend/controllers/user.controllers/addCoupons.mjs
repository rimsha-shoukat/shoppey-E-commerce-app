import User from "../../models/user.model.mjs";

async function addCoupons(req, res) {
    try {
        const { name, value } = req.body;
        if (!coupons) {
            return res.status(400).json({ message: "Coupons are required" });
        }
        const user = await User.findById(req.user._id);

        // ffind existed coupon
        const existedCouponIndex = user.coupons.findIndex(coupon => coupon.name === name && coupon.value === value);

        if (existedCouponIndex < 0) {
            return res.status(400).json({
                message: "Coupon already exist"
            });
        }

        // add coupon to user and save
        user.coupons.push({ name, value });
        await user.save();
        return res.status(200).json({ message: "Coupon added successfully" });
    } catch (error) {
        console.log("Something went wrong in addCoupons controller", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default addCoupons;