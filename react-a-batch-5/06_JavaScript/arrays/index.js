// const arr = Array();

const arr = [];

console.log(arr);

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon", "banana"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

console.log(vegetables[vegetables.length - 1]);

// fruits[0] = "grape";
// console.log({ fruits });

// Print the array and its length

// console.log("Numbers:", numbers);
// console.log("Number of numbers:", numbers.length);

// console.log("Fruits:", fruits);
// console.log("Number of fruits:", fruits.length);

// console.log("Vegetables:", vegetables);
// console.log("Number of vegetables:", vegetables.length);

// console.log("Animal products:", animalProducts);
// console.log("Number of animal products:", animalProducts.length);

// console.log("Web technologies:", webTechs);
// console.log("Number of web technologies:", webTechs.length);

// console.log("Countries:", countries);
// console.log("Number of countries:", countries.length);

const js = "JavaScript Framework";
const charsInJavaScript = js.split(" ");
console.log({ charsInJavaScript });

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); // [1, 2, 3, 4, 5, 6]
console.log({ firstList });

const searchKeyword = "BANANA";
let index = fruits.indexOf(searchKeyword.toLowerCase()); // 0

console.log({ index });
if (index === -1) {
	console.log("This fruit does not exist in the array");
} else {
	console.log("This fruit does exist in the array");
}

let lastIndex = fruits.lastIndexOf(searchKeyword.toLowerCase()); // 4

console.log(lastIndex);

let isIncludesBanana = fruits.includes(searchKeyword.toLowerCase()); // boolean -> true

console.log(isIncludesBanana);

// isArray
console.log(Array.isArray(fruits));

// Converting array to string
// toString:Converts array to string

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // 1,2,3,4,5
console.log(numbers.join("")); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

numbers.push(6);
console.log({ numbers }); // -> [1,2,3,4,5,6]

const copyNumbers = numbers.filter((v, i) => i !== numbers.length - 1);

console.log({ numbers });
console.log(copyNumbers);
