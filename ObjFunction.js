let Laptop = {
    cpu: 'i9',
    ram: 16,
    brand: "HP",

    greet: function() {
        console.log("Hello world");
    },

    getConfig: function() {
        console.log(Laptop.brand);
    },

    

}

Laptop.greet();
Laptop.greet();

Laptop.getConfig();



