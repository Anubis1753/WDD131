// 1. JavaScipt Arrays
let names = ["Nark", "Mathen", "Markthaniel", "Nathark"];
console.log(names);
console.log(names[2]);

let grades = [89, 39, 55, 100];
console.log(grades[1]);

// 2. JavaScript objects
// Own custom satatypes
let studentName = "Brother Warner";
let studentClasses = ["WDD131", "CSE110"];
let studentGrades = [67, 88];

// This is an object literal
let student = {
    // Kev/value pairs
    name: "Brother Warner",
    classes: ["WDD131", "CSE110"],
    grades: [67, 88]
}

// Accessing object properties objectName.keyName
console.log(student.name);

// 3. Array methods
names.forEach((name) => {
    // Runs this function once for every element in the array one at a time
    console.log(name);
})

let newNames = names.map((name) => {
return name + " Hatchley";
})

console.log(newNames);

let filteredNames = names.filter((name) => {
    return name[0] === 'M';
})

console.log();

// Reduce
const numbers = [125, 20, 5];
document.getElementById("output").innerHTML = numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}

// Index of
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

// Template literal
const movieSummary = `
  <div class="movie-summary">
    <h2>${movie.title}</h2>
    <p>${movie.genre} - ${stars}</p>
  </div>
`;
document.getElementById("movie-list").innerHTML += movieSummary;  

// Object
const car = {type:"Fiat", model:"500", color:"white"};    