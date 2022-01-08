const round = Math.floor;
const random = Math.random;

module.exports.integer = (max = 100) => {
  return round(random() * max);
};

module.exports.float = (max = 100, decimalPlaces = 2) => {
  return parseFloat((random() * max).toFixed(decimalPlaces));
};
