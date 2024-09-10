import swaggerJsdoc, { SwaggerDefinition, Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";
import logger from "./logger.config.js";

// Swagger definition
const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0", // You can use '2.0' for older versions
  info: {
    title: "My Node.js API", // Title of the API documentation
    version: "1.0.0", // Version of the API
    description: "A simple API documentation",
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  servers: [
    {
      url: "http://localhost:3000", // The URL of your API
      description: "Development server",
    },
  ],
};

// Options for the swagger-jsdoc
const options: Options = {
  swaggerDefinition,
  apis: ["../src/routes/*.ts", "../src/models/*.ts"], // Path to the API docs (JSDoc comments in your code)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Application, port: number) {
  // Swagger page
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  logger.info(`Docs available at http://localhost:${port}/api-docs`);
}

export default swaggerDocs;
