import { Request, Response } from "express";
import { z } from "zod";
import { prismaClient } from "./db";

const inputBody = z.object({
  a: z.number(),
  b: z.number(),
});

export const sumIndex = async (req: Request, res: Response): Promise<void> => {
  const result = inputBody.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  const add = result.data.a + result.data.b;

  await prismaClient.request.create({
    data: {
      a: result.data.a,
      b: result.data.b,
      result: add,
      type: "Sum",
    },
  })

  res.json({ add });
};
export const multiIndex = async (req: Request, res: Response): Promise<void> => {
  const result = inputBody.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  const multi = result.data.a * result.data.b;

  const request = await prismaClient.request.create({
    data: {
      a: result.data.a,
      b: result.data.b,
      result: multi,
      type: "Multiply"
    },
  });

  res.json({ result: multi, id: request.id });
};
