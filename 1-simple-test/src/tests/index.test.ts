import {describe,test,expect } from "@jest/globals"
import {add, divide, multiply, subtract} from "../index"

describe("Calculator", () => {
    test("add", () => {
        expect(add(1, 2)).toBe(3);
        expect(add(1, -2)).toBe(-1);
    })
    test("subtract", () => {
        expect(subtract(1, 2)).toBe(-1);
        expect(subtract(1, -2)).toBe(3);
    })
    test("multiply", () => {
        expect(multiply(1, 2)).toBe(2);
        expect(multiply(1, -2)).toBe(-2);
    })
    test("divide", () => {
        expect(divide(1, 2)).toBe(0.5);
        expect(divide(1, -2)).toBe(-0.5);
    })
})