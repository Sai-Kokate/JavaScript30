const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function ignoreArticlesSort(arr) {
  const articlesRegex = /^(A|An|The)\s/i;

  arr.sort((a, b) => {
    const trimmedA = a.replace(articlesRegex, "").trim();
    const trimmedB = b.replace(articlesRegex, "").trim();
    return trimmedA.localeCompare(trimmedB);
  });

  return arr;
}

const sortedBands = ignoreArticlesSort(bands);

const list = document.querySelector("#bands");

const listElements = sortedBands
  .map((band) => {
    return `
  <li>${band}</li>
  `;
  })
  .join("");

list.innerHTML = listElements;
