const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should return a 200 status code", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
describe("Test POST /launches", () => {
  test("It should also return a 200 status code", () => {});
  test("It should catch missing required properties", () => {});
  test("It should catch invalid dates", () => {});
});
