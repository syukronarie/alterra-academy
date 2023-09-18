const multiply = (a, b) => {
	if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b)) {
		console.log("ooooo");
		throw new Error("a or b should be a number");
	}
	const result = a * b;
	console.log(result);
	return result;
};

try {
	multiply(10, "10");
} catch (error) {
	console.error(error);
}
