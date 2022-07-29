const Intern = require("../lib/Intern");

test("find college through constructor", () => {
    const testBen = "UC Berkeley";
    const e = new Intern("Ben", 1, "ben@ben.com", testBen);
    expect(e.college).toBe(testBen);
});

test(" getRole() should return intern ", () => {
    const testBen = "Intern";
    const e = new Intern("Ben", 1, "ben@ben.com", "UC Berkeley");
    expect(e.getRole()).toBe("Intern");
});

test("college will show with getCollege", () => {
    const testBen = "UC Berkeley";
    const e = new Intern("Ben", 1, "ben@ben.com", testBen);
    expect(e.getCollege()).toBe(testBen);
});