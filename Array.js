// Array creation

// let values = [];
// let values = new Array();

// Above both are same in both we are trying to creating array

// In Javascript array we can pass data of any type String , number, object, function

let values = [5,7,8, "Aashish", {tech : "js"}, function(){ console.log("Hello World");}];
console.log(values.length);
console.log(values);

let arr = [];
arr.push(5,6);
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

let arr2 = [5,7,8];
console.log(arr2.push(3));
console.log(arr2);
console.log(arr2.pop());
console.log(arr2);

console.log(arr2.shift()); // Remove element from first
console.log(arr2);
console.log(arr2.unshift(2));
console.log(arr2);



let data = [5,7,8,9,4];
console.log(data.splice(2,2,11,15));

console.log(data);