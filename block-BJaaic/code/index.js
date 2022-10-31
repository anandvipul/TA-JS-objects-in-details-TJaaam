let animalMethods = {
    eat() {
        console.log(`I live in ${this.location} and i can eat`);
    },

    changeLocation(newLocation) {
        this.location = newLocation;
    },

    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}.`;
    },
};

function createAnimal(location, numberOfLegs) {
    let obj = Object.create(animalMethods);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
}


let dogMethods = {
    bark() {
        alert(`I am ${this.name} and I can bark.`);
    },

    changeName(newName) {
        this.name = name;
    },

    changeColor(newColor) {
        this.color = color;
    },

    summary() {
        return `i am ${this.name} and I am of ${this.color} color. i can also bark.`;
    }
};

Object.setPrototypeOf(dogMethods, animalMethods);

function createDog(location, numberOfLegs, name, color) {
    let obj = Object.create(dogMethods);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    obj.name = name;
    obj.color = color;

    return obj;
}


let catMethods = {
    meow() {
        alert(`I am ${this.name} and I can do meow meow.`);
    },

    changeName(newName) {
        this.name = newname;
    },

    changeColorOfEyes(newColor) {
        this.color = newColor;
    },

    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow.`;
    }
}


Object.setPrototypeOf(catMethods, animalMethods);

function createCats(location, numberOfLegs, name, colorOfEyes) {
    let obj = Object.create(catMethods);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;

    return obj;
}