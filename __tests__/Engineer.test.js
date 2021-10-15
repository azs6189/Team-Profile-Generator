// Using Engineer constructor
const Engineer = require("../lib/Engineer");

// Creating Engineer object
test("creates an Engineer object", () => {
	const engineer = new Engineer("Jen", 90, "jen@gmail.com", "jen101");
	expect(engineer.github).toEqual(expect.any(String));
});

// Gets github from function getGithub()
test("gets engineer github value", () => {
	const engineer = new Engineer("Jen", 90, "jen@gmail.com", "jen101");

	expect(engineer.getGithub()).toEqual(
		expect.stringContaining(engineer.github.toString())
	);
});

// Gets role from function getRole()
test("gets role of employee", () => {
	const engineer = new Engineer("Jen", 90, "jen@gmail.com", "jen101");
	expect(engineer.getRole()).toEqual("Engineer");
});
