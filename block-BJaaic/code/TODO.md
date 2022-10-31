# Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


```js
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
```

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`


```js
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

```

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

```js
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


```