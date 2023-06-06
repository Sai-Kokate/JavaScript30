// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const oldInventors = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year < 1600;
});

console.table(oldInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstLastName = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});

console.log(firstLastName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventor = [...inventors].sort((a, b) => {
  return a.year - b.year;
});

console.log(sortedInventor);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const allYears = inventors.reduce((acc, curr) => {
  diff = curr.passed - curr.year;
  acc += diff;
  return acc;
}, 0);

console.log(allYears);

// 5. Sort the inventors by years lived

// const sortedByYears = [...inventors]
//   .map((inventor) => {
//     yearsLived = inventor.passed - inventor.year;
//     inventor.yearsLived = yearsLived;
//     return inventor;
//   })
//   .sort((a, b) => {
//     return a.yearsLived - b.yearsLived;
//   });

// console.log(sortedByYears);

const sortedByYears2 = [...inventors].sort((a, b) => {
  const firstLived = a.passed - a.year;
  const lastLived = b.passed - b.year;

  return lastLived > firstLived ? -1 : 1;
});

console.log(sortedByYears2);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const grp = document.querySelector(".mw-category");
const nameList = Array.from(grp.querySelectorAll("a"));
const names = nameList
  .map((n) => {
    return n.innerText;
  })
  .filter((n) => n.includes("de"));

console.log(names);

// 7. sort Exercise
// Sort the people alphabetically by last name
function compareFunc(a, b) {
  const nameA = a.split(", ");
  const nameB = b.split(", ");
  if (nameA[0] < nameB[0]) {
    return -1;
  }
  if (nameA[0] > nameB[0]) {
    return 1;
  }
  // names must be equal
  return 0;
}
const sortedPpl = [...people].sort(compareFunc);

console.log(sortedPpl);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const sumInst = [...data].reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 0;
  }
  acc[curr]++;
  return acc;
}, {});

console.log(sumInst);
