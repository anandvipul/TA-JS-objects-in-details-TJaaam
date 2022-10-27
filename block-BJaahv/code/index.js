// Creation of User 
// properties (data):
//  name
//  id
//  noOfProjects
// methods:
//  getProjects -> return number of project
//  changeName -> accepts one parameter (newName)returns old user name
//  incrementProject -> returns updated number of projects
//  decrementProject -> returns updated number of projects





// Using function to create object

function createUser(name, id, noOfProjects) {
  let User = {};
  User.name = name;
  User.id = id;
  User.noOfProjects = noOfProjects;
  User.getProjects = () => this.noOfProjects;
  User.changeName = (newName) => User.name = newName;
  User.incrementProject = () => User.noOfProject += 1;
  User.idecrementProject = () => User.noOfProject -= 1;
  return User;
}

// Using Object.create (prototypal pattern)
  let userMethods = {
    getProjects: () => this.noOfProjects,
    changeName: function (newName) {
      this.name = newName;   
    },
    incrementProject: function ()  { this.noOfProjects += 1 },
    decrementProject: function ()  { this.noOfProject -= 1 },
  };
  
  function createUser(name, id, noOfProject) {
    let User = Object.create(userMethods);
    User.name = name;
    User.id = id;
    User.noOfProjects = noOfProject;
    return User;
  };
    
  
// Using Pseudoclassical Way


function User(name, id, noOfProject) {
  
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProject;
  
};

User.prototype = {
  getProjects: () => this.noOfProjects,
    changeName: function (newName) {
      this.name = newName;   
    },
  getProjects: function () { return this.noOfProjects},
    incrementProject: function ()  { this.noOfProjects += 1 },
    decrementProject: function ()  { this.noOfProject -= 1 },
};
  


  
  


// Using Class



// TEST

class User {
  constructor (name, id, noOfProject) {
    this.name = name;
    this.id = id;
    this.noOfProject = noOfProject;
  }
  changeName(newName) {
      this.name = newName;   
    }
  incrementProject()  { this.noOfProjects += 1 }
  decrementProject()  { this.noOfProject -= 1 }
  getProjects() { return this.noOfProjects}
}
    

let jack = new User("Jack", 23, 1);
let jill = new User("Jill", 14, 1);




console.group("Jack");
console.log(jack.name);
jack.changeName("jack changed");
console.log(jack.name);


console.groupEnd();
