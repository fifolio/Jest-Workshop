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

expect.extend({
  toBeBetween(received, start, end) {
    const pass = received > start && received < end;
    if (pass) {
      return {
        message: () => `Expected ${received} Is Between ${start} and ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} Must Be Between ${start} and ${end}`,
        pass: false,
      };
    }
  },
});

test("Check if Year is Between years rang", () => {
  expect(1982).toBeBetween(1980, 1990);
});

test("Expect Anything", () => {
  let x = "A";
  expect("firas").toEqual(expect.anything());
  expect(x).toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3, 4]).toEqual(expect.anything());
});

test("Expect Any Constructor", () => {
  let x = "A";
  expect(x).toEqual(expect.any(String));
});

test("Expect Any to be found in the main array", () => {
  let myarr = [1, 2, 3, 4];
  expect(myarr).toEqual(expect.arrayContaining([4, 2]));
});
