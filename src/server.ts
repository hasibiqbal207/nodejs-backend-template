import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

import swaggerDocs from "../config/swagger.config.js";
import morganMiddleware from "./middlewares/logger.middleware.js";

// Determine the environment and load the corresponding .env file
const env = process.env.NODE_ENV || "development";
const envFile = `.env.${env}`;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "..", envFile) });

// Create an Express app
const app = express();

// Use Helmet!
app.use(helmet());

const port: number = parseInt(process.env.PORT || "3000", 10);

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
