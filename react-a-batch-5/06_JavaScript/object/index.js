const representative = {
	name: "Morpheus",
	job: "Leader",
	id: "199",
	createdAt: "2020-02-20T11:00:28.107Z",
	contactDetails: {
		phone: "8439743294793",
		email: "test@abc.com",
	},
};

// Object.keys
const keys = Object.keys(representative);
console.log(keys);

// Object.entries
const entries = Object.entries(representative);
console.log(entries);

for (const [key, value] of Object.entries(representative)) {
	console.log(key, value);
}

// Object.values
const values = Object.values(representative);
console.log(values);

// Object.freeze
const CONST = Object.freeze({
	secretKey: "verysecret",
});

console.log(CONST);

CONST.secretKey = "test";
CONST.hello = "test";

console.log(CONST);

// Object.assign
function parseStudent(student) {
	const newStudent = {
		firstName: "",
		lastName: "",
		age: null,
		gender: null,
		graduated: false,
	};

	return Object.assign(newStudent, student);
}
