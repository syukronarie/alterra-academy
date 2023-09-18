const students = [
	{
		id: 1,
		first_name: "Mahmud",
		last_name: "Libbis",
		email: "mlibbis0@microsoft.com",
		gender: "Male",
	},
	{
		id: 2,
		first_name: "Pat",
		last_name: "Monnery",
		email: "pmonnery1@oracle.com",
		gender: "Male",
	},
	{
		id: 3,
		first_name: "Gasparo",
		last_name: "Minton",
		email: "gminton2@networkadvertising.org",
		gender: "Male",
	},
	{
		id: 4,
		first_name: "Ivie",
		last_name: "Mandifield",
		email: "imandifield3@deliciousdays.com",
		gender: "Female",
	},
	{
		id: 5,
		first_name: "Jean",
		last_name: "Petrosian",
		email: "jpetrosian4@yellowbook.com",
		gender: "Male",
	},
	{
		id: 6,
		first_name: "Wally",
		last_name: "Obell",
		email: "wobell5@prweb.com",
		gender: "Female",
	},
	{
		id: 7,
		first_name: "Irvine",
		last_name: "Clifford",
		email: "iclifford6@cyberchimps.com",
		gender: "Male",
	},
	{
		id: 8,
		first_name: "Putnem",
		last_name: "Arnauduc",
		email: "parnauduc7@pen.io",
		gender: "Male",
	},
	{
		id: 9,
		first_name: "Amata",
		last_name: "McCaughen",
		email: "amccaughen8@nba.com",
		gender: "Female",
	},
	{
		id: 10,
		first_name: "Justus",
		last_name: "Lickess",
		email: "jlickess9@mayoclinic.com",
		gender: "Male",
	},
];

// for (let i = 0; i < students.length; i++) {
// 	const student = students[i];
// 	console.log(student);
// 	if (student.email === "wobell5@prweb.com") {
// 		console.log(students[i]);
// 		break;
// 	}
// }

// students.forEach((student) => {
// 	if (student.email === "wobell5@prweb.com") {
// 		console.log(students[i]);
// 	}
// });

students.map((student) => {
	const { gender } = student;
	if (gender === "Male") student.room = "A";
	if (gender === "Female") student.room = "B";
	return student;
});

console.log({ students });
