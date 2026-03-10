
async function getReviews(req, res) {
    try {
        return res.status(200).json({ message: "Review fetched successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default getReviews;