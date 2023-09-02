const webTechs = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Redux",
	"Node",
	"MongoDB",
];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // after sorting we can reverse it
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

const numbers = [1, 2, 3, 4, 5, 11, 10];
numbers.sort((a, b) => a - b);
console.log(numbers);
