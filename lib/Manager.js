// Import Employee constructor
const Employee = require("./Employee");

// Manager constructor extends Employee constructor
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// Calling Employee constructor
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	// Override employee role to manager
	getRole() {
		return "Manager";
	}
}

// To be exported
module.exports = Manager;
