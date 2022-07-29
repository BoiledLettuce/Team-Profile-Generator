const Engineer = require("../lib/Engineer");

test("github through constructor", () => {
    const testBen = "gitHub";
    const e = new Engineer("Ben", 1, "ben@ben.com", testBen)
    expect(e.github).toBe(testBen);
});

test(" getGithub() should return gitBro ", () => {
    const testBen = "gitBro"
    const e = new Engineer("Ben", 1, "ben@ben.com", testBen);
    expect(e.getGithub()).toBe(testBen);
});

test(" getrole() should return engineer ", () => {
    const testBen = "Engineer";
    const e = new Engineer("Ben", 1, "ben@ben.com", testBen);
    expect(e.getRole()).toBe(testBen);
});