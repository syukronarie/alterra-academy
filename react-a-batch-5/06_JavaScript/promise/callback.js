//Callback
const doSomething = (callback) => {
	setTimeout(() => {
		const skills = ["HTML", "CSS", "JS"];
		// callback("It did not go well", skills);
		callback(false, skills);
	}, 2000);
};

const callback = (err, result) => {
	if (err) {
		return console.log(err);
	}
	return console.log(result);
};

doSomething(callback);
