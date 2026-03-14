import User from "../../models/user.model.mjs";
import mongoose from "mongoose";

async function profile(req, res) {
    try {
        // convert string Id to object Id
        const userId = new mongoose.Types.ObjectId(req.user._id);

        // find user by id and aggregate
        const userProfile = await User.aggregate([
            {
                $match: { _id: userId }
            },
            {
                $lookup: {
                    from: "orders",
                    localField: "_id",     
                    foreignField: "user",    
                    as: "userOrders"
                }
            },
            {
                $lookup: {
                    from: "comments",
                    localField: "_id",       
                    foreignField: "user",   
                    as: "userComments"
                }
            },
            {
                $lookup: {
                    from: "reviews",
                    localField: "_id",      
                    foreignField: "user",     
                    as: "userReviews"
                }
            },
            {
                $project: {
                    password: 0,
                    __v: 0,
                }
            }
        ]);
        const user = userProfile[0] || null;
        return res.status(200).json({ message: "User profile fetched successfully", user });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default profile;