// function Animal(location, numberOfLegs) {
//     this.location = location;
//     this.numberOfLegs = numberOfLegs;
// }

// Animal.prototype = {
//     eat() {
//         console.log(`I live in ${this.location} and I can eat.`);
//     },

//     changeLocation(newLocation) {
//         this.location = newLocation;
//     },

//     summary() {
//         return `I live in ${this.location} and I have ${this.numberOfLegs}`;
//     }
// }


// function Dog(location, numberOfLegs, name, color) {
//     this.name = name;
//     this.color = color;
// }

// Dog.prototype = {
//     bark() {
//         alert(`I am ${this.name} and I can bark`);
//     },

//     changeName(newName) {
//         this.name = newName;
//     },

//     changeColor(newColor) {
//         this.color = newColor;
//     },

//     summary() {
//         return `I am ${this.name} and I am of ${this.color} color. I can also bark.`;
//     }
// }

// Object.setPrototypeOf(Dog.prototype, Animal.prototype);



// function Cat(location, numberOfLegs, name, colorOfEyes) {
//     this.location = location;
//     this.numberOfLegs = numberOfLegs;
//     this.name = name;
//     this.colorOfEyes = colorOfEyes;
// }

// Cat.prototype = {
//     meow() {
//         alert(`I am ${this.name} and i can do meow meow 😁💕`);
//     },

//     changeName(newName) {
//         this.name = newName;
//     },

//     changeColorOfEyes(newColor) {
//         this.color = newColor;
//     },

//     summary() {
//         return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
//     }


// };

// Object.setPrototypeOf(Cat.prototype, Animal.prototype);




// Class Approach

class Animal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }

    eat() {
        console.log(`I live in ${this.location} and I can eat`);
    }

    changelocation(newLocation) {
        return this.location = newLocation;
    }

    summary() {
        return `I live in ${this.location} and i have ${this.numberOfLegs}`;
    }
}


class Dog extends Animal {
    constructor(location, numberOfLegs, name, color) {
        super(location, numberOfLegs);
        this.name = name;
        this.color = color;
    }

    bark() {
        alert(`I am ${this.name} and i can bark`);
    }

    changeName(newName) {
        this.name = newName;
    }

    changeColor(newColor) {
        this.color = newColor;
    }

    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark.`;
    }
}



class cat extends Animal {
    constructor(location, numberOfLegs, name, colorOfEyes) {
        super(location, numberOfLegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }

    meow() {
        alert(`I am ${this.name} and I can do meow meow`);
    }

    changeName(newName) {
        this.name = newName;
    }

    changeColor(newColor) {
        this.color = newColor;
    }

    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow and mwow.`;
    }
}


//Test 

let tommy = new Dog("Place", 4, "tommy", "black");
tommy.summary();