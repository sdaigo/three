import { add } from "./calc";

describe("calc:add", () => {
  it("should return the sum of two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
});
