const students = [
	{
		id: 1,
		first_name: "Mahmud",
		last_name: "Libbis",
		email: "mlibbis0@microsoft.com",
		gender: "Genderfluid",
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

console.time("filter");
const maleStudents = students.filter((value) => value.gender === "Male");
console.timeEnd("filter");

console.log({ maleStudents });

console.time("find");
const findSpecificStudent = students.find((val) => val.id === 2);
console.timeEnd("find");
console.log("student with id two", findSpecificStudent);

console.table(students[1]);

console.info(findSpecificStudent);
