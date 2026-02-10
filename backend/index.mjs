import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.mjs";
import cookieParser from "cookie-parser";

// all routes
import account from "./routes/account.mjs";

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
    console.error("Failed to connect to database:", error);
    process.exit(1);
}

// routes
app.use("/api/account", account);


const Port = process.env.PORT || 4000;
app.listen(Port, () => { console.log(`Server is running on port ${Port}`); });
