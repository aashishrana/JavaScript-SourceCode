function Alien(name, tech) {
    this.name = name;
    this.tech = tech;

    this.work = function() {
        console.log("Solving bugs");
    }
}

let alien1 = new Alien("Navin", "Js");
let alien2 = new Alien("Kiran", "C++");

//alien1.tech = "Blockchain";
console.log(alien1);

alien1.work();