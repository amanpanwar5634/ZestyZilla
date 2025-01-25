import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRoute from "./routes/cartRoute.js";
import 'dotenv/config.js'; // to acquire the .env file
import orderRouter from "./routes/orderRoute.js";
import path from 'path';

// Config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connection to the database
connectDb();

// API endpoints
app.use("/food", foodRouter);
app.use("/user", userRouter);
app.use("/cart", cartRoute);
app.use("/order", orderRouter);

// Serve images (if needed)
app.use("/images", express.static("uploads"));

// Serve static files from the React/Vite build directory
// For Vite, the output directory is usually `dist`
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback for React Router: Serve index.html for any non-API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html')); // Make sure this matches your build folder
});

// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start the server
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
