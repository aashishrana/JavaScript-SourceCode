let alien = {
    name : 'Aashish',
    tech : "js",

    laptop : {
        cpu: 'I9',
        ram: 8,
        brand: 'Asus'

    }
}

// console.log(alien.laptop.ram);
// console.log(alien?.name?.length);

// delete alien.laptop;
// console.log(alien);

// delete alien.laptop.brand;
// console.log(alien);

for(let key in alien) {
    console.log(key);
    console.log(key, alien[key]);
}