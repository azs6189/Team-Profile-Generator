// Using Intern constructor
const Intern = require("../lib/Intern");

// Creating Intern object
test("creates an Intern object", () => {
	const intern = new Intern("Jen", 90, "jen@gmail", "Penn State");
	expect(intern.school).toEqual(expect.any(String));
});

// Gets school from function getSchool()
test("gets employee school", () => {
	const intern = new Intern("Jen", 90, "jen@gmail", "Penn State");
	expect(intern.getSchool()).toEqual(
		expect.stringContaining(intern.school.toString())
	);
});

// Gets role from function getRole()
test("gets role of employee", () => {
	const intern = new Intern("Jen", 90, "jen@gmail.com", "Penn State");
	expect(intern.getRole()).toEqual("Intern");
});
