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

// skipped
test.skip("Check if array Contains ONLY numbers", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).not.toBeTruthy();
  }
});

test("Check if array First Element is Larger than 1", () => {
  expect(allData[3]).toBeGreaterThan(1);
});

test("Check if array First Element is Larger than or Equal 1", () => {
  expect(allData[1]).toBeGreaterThanOrEqual(1);
});

test("Check if array First Element is Less than 5", () => {
  expect(allData[1]).toBeLessThan(5);
});

test("Check if array First Element is Less than or Equal 2", () => {
  expect(allData[1]).toBeLessThanOrEqual(2);
});
