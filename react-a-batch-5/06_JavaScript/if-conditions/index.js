// variable declaration in JS
// let, const, var

/**
 * let
 * - can be reassign / mutable
 * - block scope
 * - re-declaration scope = no
 */

/**
 * const
 * - cannot able to reassign / immutable
 * - block scope
 * - re-declaration scope = no
 */

/**
 * var
 * - can be reassign / immutable
 * - non-block scope
 * - hoisting
 * - re-declaration scope = yes
 */

let num = 0;

if (num > 0) {
	firstName = "Arie";
	lastName = "Syukron";
	console.log(`${num} is a positive number`);
} else {
	var firstName = "M";
	console.log("else", firstName);
	console.log(`${num} is a negative number`);
}

console.log({ firstName });
console.log({ lastName });

// hoisting
var firstName;
var lastName;
