//tesing tut : https://www.youtube.com/watch?v=FgnxcUQ5vho&list=PLWu_sGNNZvopEy6di4CJCcTqqCODAgQ6B&index=1&t=635s

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can i execute a test lol", () => {
    const testBen = 100;
    const e = new Manager("Ben", 1, "test@test.com", testBen);
    expect(e.officeNumber).toBe(testBen);
});

test("Let's get this bread", () => {
    const testBen = "Manager";
    const e = new Manager("Ben", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testBen);
});

test("testing is in my middle name", () => {
    const testBen = 100;
    const e = new Manager("Ben", 1, "test@test.com", testBen);
    expect(e.getOfficeNumber()).toBe(testBen);
});