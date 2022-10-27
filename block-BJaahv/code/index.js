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
  User.changeName = (newName) => this.name = newName;
  User.incrementProject = () => this.noOfProject += 1;
  User.idecrementProject = () => this.noOfProject -= 1;
  return User;

// Using Object.create (prototypal pattern)
  let userMethods = {
    getProjects: () => this.noOfProjects,
    changeName: (newName) => {
      this.name = newName;
      return this;
    },
    incrementProject: () => this.noOfProject += 1,
    decrementProject: () => this.noOfProject -= 1,
  };
  
  function createUser(name, id, noOfProject) {
    let User = Object.create(userMethods);
    User.name = name;
    User.id = id;
    User.noOfProjects = noOfProject;
    return User;
  };
    
  
// Using Pseudoclassical Way
// Using Class
