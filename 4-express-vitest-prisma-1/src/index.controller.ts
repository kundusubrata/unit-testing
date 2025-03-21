import { Request, Response } from "express";
import { z } from "zod";
import { prismaClient } from "./db";

const inputBody = z.object({
  a: z.number(),
  b: z.number(),
});

export const index = async (req: Request, res: Response): Promise<void> => {
  const result = inputBody.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  const add = result.data.a + result.data.b;

  await prismaClient.sum.create({
    data: {
      a: result.data.a,
      b: result.data.b,
      result: add,
    },
  });

  res.json({ add });
};
