function filterName(name) {
  if (name === undefined) {
    name = "unknown";
  }

  if (name) {
    let nameWithoutSpaces = name.trim();
    name = nameWithoutSpaces;
  }

  if (name) {
    let nameCutted = name.slice(0, 10);
    name = nameCutted;
  }

  if (name.startsWith("_")) {
    name = name.substring(1);
  }

  return name;
}

// console.log(filterName("Firas mohamed Dabbabi"));

module.exports = filterName;
