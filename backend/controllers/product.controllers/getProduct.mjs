import Product from "../../models/product.model.mjs";

async function getProducts(req, res) {
    try {
        const { limit, page } = req.query;
        const parseLimit = parseInt(limit);
        const parsePage = parseInt(page);
        console.log(parseLimit, parsePage);
        // find number of items to skip
        const skip = (parsePage - 1) * parseLimit;

        // find products
        const products = await Product.find({}).limit(parseLimit).skip(skip).sort({ createdAt: -1 });
        // get total count of products
        const total = await Product.countDocuments({});

        return res.status(200).json({ message: "Products fetched successfully", products, total })
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ mesaage: "Interal server error" });
    }
}

export default getProducts;