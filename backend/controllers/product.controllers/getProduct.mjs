import Product from "../../models/product.model.mjs";

async function getProducts(req, res) {
    try {
        // find products
        const products = await Product.find({});
        // get total count of products
        const total = await Product.countDocuments({});

        return res.status(200).json({ message: "Products fetched successfully", products, total })
    } catch (error) {
        console.log("Something went wrong" + error.message);
        return res.status(500).json({ mesaage: "Interal server error" });
    }
}

export default getProducts;