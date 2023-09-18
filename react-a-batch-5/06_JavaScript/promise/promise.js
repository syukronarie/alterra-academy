const axios = require("axios");

const getTodo = async () => {
	const result = await axios.get(
		"https://jsonplaceholder.typicode.com/todos/1"
	);
	console.log(result.data);
	return result;
};

getTodo();
