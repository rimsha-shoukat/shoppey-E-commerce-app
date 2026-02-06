import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.mjs";

// middleware auth
// import auth from "./middleware/auth.mjs";
// all routes
// import profile from "./routes/profile.mjs";
// import signin from "./routes/signin.mjs";
// import signup from "./routes/signup.mjs";
// import products from "./routes/products.mjs";
// import orders from "./routes/orders.mjs";
// import reviews from "./routes/reviews.mjs";
// import comments from "./routes/comments.mjs";

dotenv.config();
const app = express();
app.use(express.json());

// app.use("/api/profile", auth, profile);
// app.use("/api/auth/signin", signin);
// app.use("/api/auth/signup", signup);
// app.use("/api/products", auth, products);
// app.use("/api/orders", auth, orders);
// app.use("/api/reviews", auth, reviews);
// app.use("/api/comments", auth, comments);

try {
    await connectDB();
} catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
}

const Port = process.env.PORT || 4000;
app.listen(Port, () => { console.log(`Server is running on port ${Port}`); });
