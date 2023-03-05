let theSum = require("../sum");

describe("Check the numbers sum Total", () => {
  it("Testing theSum()", () => {
    expect(theSum(1, 49, 50)).toBe(100);
  });
});
