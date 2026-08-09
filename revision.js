/* Challenge 1: Array Trasformation
const numbers = [2, 5, 8, 10, 13, 20]; */

const numbers = [2, 5, 8, 10, 13, 20];
const trans = numbers.map(function(num) {
    return num * 2;
})

/* Challenge 2 — Filter 
const numbers = [12, 5, 18, 7, 20, 3]; */

const numbers = [12, 5, 18, 7, 20, 3];
const filtered = numbers.filter(function(num) {
    return num > 10;
});

/* Challenge 3 — Reduce 
const prices = [100, 250, 50, 300]; */

const prices = [100, 250, 50, 300];
const total = prices.reduce(function(sum,prices) {
    return sum + prices;
});

/* Challenge 4 — Array of Objects
const students = [
  { name: "James", marks: 85 },
  { name: "Rahul", marks: 72 },
  { name: "Priya", marks: 91 },
  { name: "Arun", marks: 65 }
];

Do the following:
1. Get only students who scored 80+.
2. Create an array containing only their names.
3. Find the student with 91 marks. */

const students = [
  { name: "James", marks: 85 },
  { name: "Rahul", marks: 72 },
  { name: "Priya", marks: 91 },
  { name: "Arun", marks: 65 }
];

const marksHigh = students.filter(function(student) {
    return student.marks >=80;
});

const names = marksHigh.map(function(student) {
    return student.name;
});

const highest = students.filter(function(student) {
    return student.marks === 91;
});

/*Challenge 5 — Sorting Objects

Using the same students array:

Sort students by marks in:

Ascending order
Descending order */

const ascending = [...students].sort(function(a, b) {
    return a.marks - b.marks;
});

const descending = [...students].sort(function(a, b) {
    return b.marks - a.marks;
});

/* Challenge 6 — Destructuring

Given:

const user = {
  name: "James",
  age: 20,
  address: {
    city: "Coimbatore",
    state: "Tamil Nadu"
  }
};

Using destructuring, extract:

name
age
city
state */

const {name, age, address: {city, state}} = user;

/* Challenge 7 — Constructor + Class

Create a Car class with:

brand
model
year

Create two car objects and display their details. */

class Car {
    constructor(brand,model,year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2021);

/* Challenge 8 — Inheritance

Create:

Animal
  ↓
Dog

Animal should have:

eat()

Dog should have:

bark()

Create a dog object and call both methods */

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog();
dog.eat();
dog.bark();


/* Challenge 9 — super()

Create:

Person
  ↓
Student

Person should contain:

name
age

Student should contain:

course

Use super() to initialize the parent properties.   */

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name,age,course) {
        super(name,age);
        this.course = course;
    }
}

const student = new Student("James", 20, "Computer Science");
student.name;
student.age;
student.course;

/* Challenge 10 — Static Method

Create a Calculator class with static methods:

add()
subtract()
multiply()
divide()

Call them using the class name. */

class Calculator {
    static add(a,b) {
        return a + b;
    }
    static subtract(a,b) {
        return a - b;
    }

    static multiply(a,b) {
        return a * b;
    }
    static divide(a,b) {
        return a / b;
    }   
}

console.log(Calculator.add(5,3));
console.log(Calculator.subtract(5,3));
console.log(Calculator.multiply(5,3));
console.log(Calculator.divide(5,3));

/* Challenge 11 — Closure Counter ⭐

Create a function:

createCounter()

It should return a function that increments the counter every time it is called. */

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
        console.log(count);
    }
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

/* Challenge 12 — Delayed Messages ⭐

Print:

Message 1
Message 2
Message 3

using setTimeout() so that:

Message 1 → after 1 second
Message 2 → after 2 seconds
Message 3 → after 3 seconds */

setTimeout(function() {
    console.log("Message 1:");
},1000);

setTimeout(function() {
    console.log("Message 2:");
},2000);

setTimeout(function() {
    console.log("Message 3:");
},3000);

/*Create a function:

calculate(a, b, callback)

It should use the callback to perform different operations. */

function calculate(a,b,callback) {
    return callback(a,b);
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

console.log(calculate(5,3,add));
console.log(calculate(5,3,subtract));
console.log(calculate(5,3,multiply));
console.log(calculate(5,3,divide));

/* Challenge 14 — Mini Student Analyzer 🔥

Given:

const students = [
  { name: "James", marks: 85 },
  { name: "Rahul", marks: 72 },
  { name: "Priya", marks: 91 },
  { name: "Arun", marks: 65 },
  { name: "Kavi", marks: 88 }
];

Using array methods:

Get students who passed (>= 50).
Get students who scored 80+.
Create an array of names.
Calculate the total marks.
Calculate the average marks.
Find the student with the highest marks.
Sort students by marks. */

const students = [
  { name: "James", marks: 85 },
  { name: "Rahul", marks: 72 },
  { name: "Priya", marks: 91 },
  { name: "Arun", marks: 65 },
  { name: "Kavi", marks: 88 }
];

const passedStudents = students.filter(function(student) {
    return student.marks >=50;
});

const OGradeStudents = students.filter(function(student) {
    return student.marks >= 80;
});

const names = students.map(function(student) {
    return student.name;
});

const totalMarks = students.reduce(function(sum,student) {
    return sum + student.marks;
},0);

const averagemarks = totalMarks / students.length;

const highestMark = students.reduce(function(highest,student) {
    return (student.marks > highest.marks) ? student : highest;
}, students[0]);

const sortedStudents = [...students].sort(function(a,b) {
    return a.marks - b.marks;
});

console.log("Passed Students:", passedStudents);
console.log("O Grade Students:", OGradeStudents);
console.log("Names:", names);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averagemarks);
console.log("Highest Mark Student:", highestMark);
console.log("Sorted Students:", sortedStudents);

/* 
Things I learnt:
1. Use Initial 0 in reduce function to avoid NaN error.
2. Use spread operator to avoid mutating the original array when sorting.
*/
