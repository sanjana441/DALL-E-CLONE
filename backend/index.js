import express from "express"; // Import the express package
import * as dotenv from "dotenv"; // Import the dotenv package
import cors from "cors"; // Import the cors package

import connectDB from "./mongodb/connect.js"; // Import the connectDB function from the connect.js file

dotenv.config(); // Load environment variables from a .env file into process.env

const app = express(); // Create an Express app

app.use(cors()); // Enable CORS
app.use(express.json({ limit: "50mb" })); // Enable JSON parsing

app.get("/", async (req, res) => {
  // Define a route
  res.send("Hello from DALL-E"); // Send a response to the client
});

const startServer = async () => {
  // Define a function to start the server

  try {
    connectDB(process.env.MONGODB_URL); // Connect to the database
    const port = process.env.PORT || 3001; // Define the port
    app.listen(port, () => {
      // Start the server
      console.log(`Server started on http://localhost:${port}`); // Log a message to the console
    });
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error); // Log an error message
  }
};

startServer(); // Start the server
