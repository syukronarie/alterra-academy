const pattern = new RegExp("javascript", "gi");

const str = "I love javascript";

// const pattern = /javascript/gi;

console.log(pattern.test(str));

console.log(str.search(pattern));

console.log(str.replace(/JavaScript|javascript/, "TS"));
