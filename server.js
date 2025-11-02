import express from "express";
const app = express();

app.use(express.static("public"));
app.get("/api/time", (req, res) => {
  res.send({ time: new Date().toLocaleTimeString() });
});

app.listen(3000, () => console.log("Server running on port 3000"));
