let Laptop = {
    cpu: 'i5',
    ram: 16,
    brand: "HP",

    greet: function() {
        let storage = 100
        console.log(storage);
        console.log("Hello world");
    },

    getConfig: function() {
        console.log(this.cpu);
    },

    

}

let Laptop2 = {
    cpu: 'i7',
    ram: 16,
    brand: "HP",

    greet: function() {
        let storage = 100
        console.log(storage);
        console.log("Hello world");
    },

    getConfig: function() {
        console.log(this.cpu);
    },

    

}

Laptop.greet();
Laptop2.greet();

Laptop.getConfig();
Laptop2.getConfig();

if(Laptop.cpu > Laptop2.cpu) {
    console.log(Laptop);
}

else {
    console.log(Laptop2);
}



