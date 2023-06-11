const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello this normal console.log");

// Interpolated
console.log("Hello my name is %s", "Sai");

// Styled
console.log(
  "%c Hello my name is Sai",
  "font-size:25px ; color: blue; background: #BADA55 "
);

// warning!
console.warn("Warning in Console");

// Error :|
console.error("Error in Console");

// Info
console.info("Information in console");

// Testing
console.assert(1 === 2, "This is incorrect");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(document.querySelector("p"));
console.dir(document.querySelector("p"));

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count("Sai");
console.count("Sai");
console.count("Balaji");
console.count("Balaji");
console.count("Sai");
console.count("Balaji");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/Sai-Kokate")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// Table
console.table(dogs);
