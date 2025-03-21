# Unit Testing Projects

This repository contains **5 unit testing projects** using Jest and Vitest. Each project focuses on different aspects of testing in  TypeScript.This repo covers **unit testing for TypeScript, Express, Zod, Prisma, and mocking techniques** using **Jest and Vitest**.

## **Projects Overview**

### **1. Simple TypeScript Test (Jest)**
- Tests basic math functions: **add, subtract, multiply, and divide**.
- Uses **Jest** for testing.

### **2. Simple Express App (Jest + Supertest)**
- Created an **Express server**.
- Tested all endpoints (**add, subtract, multiply, and divide**) using **Jest + Supertest**.

### **3. Express with Zod (Jest + Supertest)**
- Created an **add** endpoint in Express.
- Used **Zod** for input validation.
- Tested endpoint using **Jest + Supertest**.
- Also tested for **invalid inputs**.

### **4. Express with Prisma (Vitest + Mocking)**
- Used **Prisma** as a database.
- **Mocked the database** manually for testing.
- Used **Vitest** for testing.

### **5. Express with Prisma (Vitest + vitest-mock-extended)**
- Used **vitest-mock-extended** to mock Prisma all at once.
- Used **mockResolvedValue** to check mock data.
- Used **spyOn** to check if the database function was called with the correct arguments.

---

## **CI/CD Pipeline**
- **GitHub Actions** workflow is set up.
- When a pull request is created, it will:
  1. Install dependencies.
  2. Generate Prisma clients.
  3. Run all tests.
- If all tests pass, the PR is considered successful.

---

## **Run Tests Locally**

Install all dependencies:
```sh
npm run install:all
```

Run all tests:
```sh
npm run test:all
```

---



