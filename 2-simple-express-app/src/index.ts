import express from "express";

export const app = express();
app.use(express.json());

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  const add = a + b;
  res.json({
    add,
  });
});

app.post("/subtract", (req, res) => {
  const { a, b } = req.body;
  const subtract = a - b;
  res.json({
    subtract,
  });
});

app.post("/multiply", (req, res) => {
  const { a, b } = req.body;
  const multiply = a * b;
  res.json({
    multiply,
  });
});

app.post("/divide", (req, res) => {
  const { a, b } = req.body;
  const divide = a / b;
  res.json({
    divide,
  });
});
