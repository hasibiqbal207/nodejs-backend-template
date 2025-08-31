import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import connectDB from "../config/database.config.js";

import swaggerDocs from "../config/swagger.config.js";
import morganMiddleware from "./middlewares/logger.middleware.js";

dotenv.config();

// Connect to the database
connectDB();

// Create an Express app
const app = express();

// Use Helmet!
app.use(helmet());

const port: number = parseInt(process.env.PORT || "3060", 10);

// Morgan middleware for logging requests
app.use(express.json());
app.use(morganMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

  swaggerDocs(app, port);
});
