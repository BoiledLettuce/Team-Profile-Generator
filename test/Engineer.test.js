const Engineer = require("../lib/Engineer");

test("github through constructor", () => {
    const testBen = "gitHub";
    const e = new Engineer("Ben", 1, "ben@ben.com", testBen)
    expect(e.github).toBe(testBen);
});