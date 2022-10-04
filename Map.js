// Map have key and value pair

let map = new Map();
map.set("Navin", "Java");
map.set("Kiran", "jd");
map.set("Navin", "Blockchain");

console.log(map.keys());

// for checking keys

console.log(map.has("Kiran"));
console.log(map.get("Navin"));


for(let [k, v] of map) {
    console.log(k, " : ", v);
}