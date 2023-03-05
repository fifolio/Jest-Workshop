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

test("Check For Undefined", () => {
  let a;
  expect(a).toBeUndefined();
});

test("Check For Substring inside String by RegExp", () => {
  let myString = "I Love My Family";
  expect(myString).toMatch(/Family/);
});

test("Check For Property age", () => {
  let myObj = {
    name: "Fitas",
    age: 54,
  };
  expect(myObj).toHaveProperty("age");
});

test("Check For Property age value is 54", () => {
  let myObj = {
    name: "Fitas",
    age: 54,
  };
  expect(myObj).toHaveProperty("age", 54);
});

expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    if (pass) {
      return {
        message: () => `Expected ${received} To be Larger Than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} to Be Larger Than ${target}`,
        pass: false,
      };
    }
  },
});

test("Check if number is larger than other number", () => {
  expect(2).toBeLargerThan(1);
});
