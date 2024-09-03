import express from 'express';
import dotenv from 'dotenv';
import logger from './logger';
import morgan from 'morgan';
import helmet from "helmet";
import path from 'path';

// Determine the environment and load the corresponding .env file
const env = process.env.NODE_ENV || 'development';
const envFile = `.env.${env}`;
dotenv.config({ path: path.resolve(__dirname, '..', envFile) });

// Create an Express app
const app = express();

// Use Helmet!
app.use(helmet());

const port = process.env.PORT || 3000;

// Morgan middleware for logging requests
const morganFormat = ':method :url :status :response-time ms';
app.use(morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(' ')[0],
        url: message.split(' ')[1],
        status: message.split(' ')[2],
        responseTime: message.split(' ')[3],
      };
      logger.info(JSON.stringify(logObject));
    }
  }
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});