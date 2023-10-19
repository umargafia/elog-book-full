import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import app from './app.js';

//setting my config file
dotenv.config();

//local database connection url
const DB_LOCAL = process.env.MONGO_URI;

// setting up server
const port = process.env.PORT || 4000;
(async () => {
  try {
    mongoose
      .connect(DB_LOCAL, {})
      .then(() => console.log('connection successfully'));
    // start the app engine
    app.listen(port, () => {
      console.log('NODE SERVER STARTED: https://127.0.0.1:' + port);
    });
  } catch (error) {
    console.error(error);
  }
})();
