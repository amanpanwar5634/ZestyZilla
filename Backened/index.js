import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRoute from "./routes/cartRoute.js";
import 'dotenv/config.js'; // to acquire the .env file
import orderRouter from "./routes/orderRoute.js";
import path from 'path';
import { fileURLToPath } from 'url';

// Config
const app = express();
const port = 4000;

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Serve static files from the frontend build directory (make sure this folder exists)
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Fallback for React Router: Serve index.html for any non-API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html')); // Ensure the correct path here
});

// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start the server
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
