import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

const inputBody = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/add", (req, res): void => {
  const result = inputBody.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  const add = result.data.a + result.data.b;
  res.json({ add });
});
