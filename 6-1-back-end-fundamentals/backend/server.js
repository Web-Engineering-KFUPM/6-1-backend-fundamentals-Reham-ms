const express = require("express");

const app = express();
const PORT = 3000;

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Full-Stack Fundamentals Lab!");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About page of the Node.js + Express lab.");
});

// Student route
app.get("/student", (req, res) => {
    res.send("Student Name: Reham");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});