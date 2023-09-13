const express = require("express");

// Create an Express application
const app = express();

// Set up middleware
app.use(express.json());

// Create API endpoints

app.get("/", async (req, res) => {
  res.status(200).json({"message": "Welcome NodeJS Jenkin"})
})


// Start the server
app.listen(3000, () => console.log("Server started on port 3000"));
