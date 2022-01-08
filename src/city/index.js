const { integer } = require("../number");
const { citiesWithState } = require("./data");
const cities = citiesWithState.reduce((acc, item) => {
  return [...acc, ...item.cities];
}, []);

const city = () => cities[integer(cities.length)];
module.exports.city = city;
