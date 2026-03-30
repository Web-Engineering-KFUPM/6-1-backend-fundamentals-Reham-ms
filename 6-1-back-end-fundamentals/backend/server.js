import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Full-Stack Fundamentals Lab!");
});

app.get("/about", (req, res) => {
    res.send("This is the About page.");
});

app.get("/student", (req, res) => {
    res.json({
        name: "Reham",
        major: "Computer Science",
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});