import User from "../../models/user.model.mjs";

async function getComments(req, res) {
    try {
        return res.status(200).json({ message: "Coupon added successfully" });
    } catch (error) {
        console.log("Something went wrong!!!", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default getComments;