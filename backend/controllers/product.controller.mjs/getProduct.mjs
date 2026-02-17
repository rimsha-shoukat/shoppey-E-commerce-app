import Product from "../../models/product.model.mjs";

async function getProducts(req, res) {
    try {
        const { limit = 20, page = 1 } = req.body;

        // find number of items to skip
        const skip = (page - 1) * limit;

        // find products
        const products = await Product.find({}).limit(limit).skip(skip).sort({ createdAt: -1 });

        // get total count of products
        const total = await products.countDocument();
        return res.status(200).json({ message: "Products fetched successfully", products, total, page })
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ mesaage: "Interal server error" });
    }
}

export default getProducts;