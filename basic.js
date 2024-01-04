// Write an arrow function which returns the product of two numbers

const product = (a, b) => a * b;

// console.log(product(4, 2));

// Object

// const student = {
//   name: "vikas",
//   age: 30,
//   greet() {
//     console.log("I am " + this.name);
//   },
// };
// person.student();

// class object

class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minAge) {
    return (minMarks) => {
      if (this.marks > minMarks && this.age > minAge) {
        console.log(this.name + " is elegible for placement");
      } else {
        console.log(this.name + " is not elegible for placement");
      }
    };
  }
}
const student1 = new Student("john", 18, 40);
student1.setPlacementAge(17)(35);
