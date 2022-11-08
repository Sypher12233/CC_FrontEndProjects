// We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

// School

// Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
// Getters: all properties have getters
// Setters: the numberOfStudents property has a setter
// Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

// Primary

// Includes everything in the School class, plus one additional property
// Properties: pickupPolicy (string)

// Middle

// Does not include any additional properties or methods

// High

// Includes everything in the School class, plus one additional property
// Properties: sportsTeams (array of strings)

class School {
  // The parameters inside this constructor (or parent constructor) are the ones that are gonna be passed in by the subclasses or child classes
  constructor(name, level, numOfStudents) {
    this._name = name;
    this._level = level;
    this._numOfStudents = numOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numOfStudents() {
    return this._numOfStudents;
  }

  set numOfStudents(num) {
    if (typeof num === "number") {
      num = this._numOfStudents;
    } else {
      return "Invalid input: numberOfStudents must be set to a Number.";
    }
  }

  quickFacts() {
    console.log(
      `${this.name} educates ${this.numOfStudents} students at the ${this.level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let random = Math.floor(Math.random() * substituteTeachers.length);
    console.log(substituteTeachers[random]);
  }
}

class PrimarySchool extends School {
  // We are gonna call those properties (that are gonna be different for each school) as parameters
  constructor(name, numOfStudents, pickupPolicy) {
    // We will write the name and numOfStudents as they are so that anything we pass as parameters to the PrimarySchool class will be passed to the parent constructor
    super(name, "primary", numOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts();

School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

class MiddleSchool extends School {
  constructor(name, numOfStudents) {
    super(name, "middle", numOfStudents);
  }
}

const Middle = new MiddleSchool("Harvard", 50);
// console.log(Middle.quickFacts());

class HighSchool extends School {
  constructor(name, numOfStudents, sportsTeams) {
    super(name, "high", numOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
alSmith.sportsTeams;
