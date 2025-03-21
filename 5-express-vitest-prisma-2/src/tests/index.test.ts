import { describe, expect, it, test, vi } from "vitest";
import request from "supertest";
import { app } from "../index";
import { prismaClient } from "../__mocks__/db";

// vi.mock("../db.ts", () => ({
//   prismaClient: {
//     sum: {
//       create: vi.fn(),
//     },
//     multiply: {
//       create: vi.fn(),
//     },
//   },
// }));

vi.mock("../db.ts");

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

describe("POST /multi", () => {
  it("should return the multiplication of the numbers", async () => {
    //What if I want to use the value that the database call returns? Right now, it will return undefined while a real DB call would return some real data. ===>>> Previously we mocking database function and it return undefined but when we need to send (userId) or mock data to user then we need to check it via mockResolveValue like below.
    prismaClient.request.create.mockResolvedValue({
      id: 2,
      a: 1,
      b: 2,
      result: 2,
      type: "Multiply",
    });
    
    // Previously we've mocked out the database call. Which means even if i pass in wrong inputs to the prismaClient.request.create function, tests would still pass ===>>> Now we need to spy on the function which will allow us to check if it was called with the correct arguments or not.
    vi.spyOn(prismaClient.request, "create");

    const response = await request(app).post("/multi").send({ a: 1, b: 2 });

    expect(prismaClient.request.create).toHaveBeenCalledWith({
      data: {
        a: 1,
        b: 2,
        result: 2,
        type: "Multiply",
      },
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: 2, id: 2 });
  });
  test("should return an error if the input is invalid", async () => {
    const response = await request(app).post("/multi").send({ a: "a", b: "b" });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input" });
  });
  test("should return an error if the input is missing", async () => {
    const response = await request(app).post("/multi").send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input" });
  });
  test("should return an error if any of the input is missing", async () => {
    const response = await request(app).post("/multi").send({ a: 1 });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input" });
  });
});
