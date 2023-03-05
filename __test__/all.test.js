const allData = require("../all");

test("Check if array contains 6 elements, 1st Method", () => {
  expect(allData.length).toBe(6);
});

test("Check if array Contains 6 elements, 2nd Method", () => {
  expect(allData).toHaveLength(6);
});

test("Check if array Contains 6 elements, 3nd Method", () => {
  expect("Thisbe").toHaveLength(6);
});

test("Check if array Contains Number 6", () => {
  expect(allData).toContain(6);
});

test("Check if array NOT Contains number 6", () => {
  expect(allData).not.toContain(7);
});

test("Check if array NOT Contains number 0", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i]).not.toBe(10);
  }
});
