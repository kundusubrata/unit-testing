import { describe, expect, it } from "@jest/globals";
import { app } from "../index";
import supertest from "supertest";

describe("POST /add", () => {
  it("should add two numbers", async () => {
    const response = await supertest(app).post("/add").send({ a: 1, b: 2 });
    expect(response.statusCode).toBe(200);
    expect(response.body.add).toBe(3);
  });
});

describe("POST /subtract", () => {
  it("should subtract two numbers", async () => {
    const response = await supertest(app)
      .post("/subtract")
      .send({ a: 1, b: 2 });
    expect(response.statusCode).toBe(200);
    expect(response.body.subtract).toBe(-1);
  });
});

describe("POST /multiply", () => {
  it("should multiply two numbers", async () => {
    const response = await supertest(app)
      .post("/multiply")
      .send({ a: 1, b: 2 });
    expect(response.statusCode).toBe(200);
    expect(response.body.multiply).toBe(2);
  });
});

describe("POST /divide", () => {
  it("should divide two numbers", async () => {
    const response = await supertest(app).post("/divide").send({ a: 1, b: 2 });
    expect(response.statusCode).toBe(200);
    expect(response.body.divide).toBe(0.5);
  });
});
