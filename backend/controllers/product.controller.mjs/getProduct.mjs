import Product from "../../models/product.model.mjs";

async function getProducts(req, res) {
    try {
        const { limit = 10, page = 1 } = req.body;
        const skip = (page - 1) * limit;
        const products = await Product.find({}).limit(limit).skip(skip).sort({ createdAt: -1 });
        const total = await products.countDocument();
        return res.status(200).json({ message: "Products fetched successfully", products, total, page })
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ mesaage: "Interal server error" });
    }
}

export default getProducts;