const Intern = require("../lib/Intern");

test("find college through constructor", () => {
    const testBen = "UC Berkeley";
    const e = new Intern("Ben", 1, "ben@ben.com", testBen);
    expect(e.college).toBe(testBen);
});