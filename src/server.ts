import express from "express";

const app = express();

const port = 3333;

app.get("/", (req, res) => {
  return res.json({ message: "Hello Lucas" });
});

app.listen(port, () => {
  console.log(`Server started at Port ${port}`);
});
