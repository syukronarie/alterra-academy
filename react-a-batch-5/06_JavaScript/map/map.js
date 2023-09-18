const motorcycles = new Map();

motorcycles.set("yamaha", ["mio", "r12", "nmax"]);
motorcycles.set("honda", ["vario", "scoopy", "pcx"]);

console.log(motorcycles);

const yamaha = motorcycles.get("yamaha");
console.log(yamaha);

motorcycles.has("yamaha");
