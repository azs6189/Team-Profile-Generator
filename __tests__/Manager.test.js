// Using Manager constructor
const Manager = require("../lib/Manager");

// Creating manager object
test("creates an Manager object", () => {
	const manager = new Manager("Jen", 90, "jen@gmail", 4);
	expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role from getRole()
test("gets role of employee", () => {
	const manager = new Manager("Jen", 90, "jen@gmail.com");
	expect(manager.getRole()).toEqual("Manager");
});
