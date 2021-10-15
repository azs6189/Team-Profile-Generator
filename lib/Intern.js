// Import Employee constructor
const Employee = require("./Employee");

// Intern constructor extends employee constructor
class Intern extends Employee {
	constructor(name, id, email, school) {
		// Calling Employee constructor
		super(name, id, email);
		this.school = school;
	}
	// Return school from input
	getSchool() {
		return this.school;
	}
	// Override Employee role to Intern
	getRole() {
		return "Intern";
	}
}

// To be exported
module.exports = Intern;
