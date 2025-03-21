import { describe, expect, test, vi } from "vitest";
import request from "supertest";
import { app } from "../index";

vi.mock("../db.ts", () => ({
  prismaClient: {
    sum: {
      create: vi.fn(),
    },
  },
}));

describe("POST /add", () => {
  test("should return the sum of the numbers", async () => {
    const response = await request(app).post("/add").send({ a: 1, b: 2 });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ add: 3 });
  });
  test("should return an error if the input is invalid", async () => {
    const response = await request(app).post("/add").send({ a: "a", b: "b" });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input" });
  });
  test("should return an error if the input is missing", async () => {
    const response = await request(app).post("/add").send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input" });
  });
  test("should return an error if any of the input is missing", async () => {
    const response = await request(app).post("/add").send({ a: 1 });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input" });
  });
});
