import express from "express";
import connectDB from "./config/db.mjs";

const app = express();

try {
    await connectDB();
} catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
}

const Port = process.env.PORT || 4000;
app.listen(Port, () => { console.log(`Server is running on port ${Port}`); });
