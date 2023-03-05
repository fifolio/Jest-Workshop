const theFilter = require("../input");

describe("Validate the input field", () => {
  it("Check if name is empty", () => {
    expect(theFilter()).toBe("unknown");
  });

  it("Check for spaces", () => {
    expect(theFilter("  Osama")).toBe("Osama");
  });

  it("Check if the input is over 10 chars", () => {
    expect(theFilter("firas_mohamed_dabbabi")).toBe("firas_moha");
  });

  it("Check if name not starts with underscore", () => {
    expect(theFilter("_Firas")).toBe("Firas");
  });
});
