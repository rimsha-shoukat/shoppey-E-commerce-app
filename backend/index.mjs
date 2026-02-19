import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.mjs";
import cookieParser from "cookie-parser";

// all routes
import userRoute from "./routes/user.route.mjs";
import reviewRoute from "./routes/review.route.mjs";
import productRoute from "./routes/product.route.mjs";
import orderRoute from "./routes/order.route.mjs";
import commentRoute from "./routes/comment.route.mjs";

// cors options
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    METHODS: "GET, POST, PUT, DELETE",
    credentials: true,
}
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());

// connect to database
try {
    await connectDB();
} catch (error) {
    console.error("Failed to connect to database: Network error ", error.message);
    process.exit(1);
}

// routes
app.use("/api/user", userRoute);
app.use("/api/review", reviewRoute);
app.use("/api/products", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/comment", commentRoute);

const Port = process.env.PORT || 4000;
app.listen(Port, () => { console.log(`Server is running on port ${Port}`); });
