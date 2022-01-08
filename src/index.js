module.exports = {
  city: require("./city").city,
  state: require("./state").state,
  country: require("./country").country,
  numbers: {
    float: require("./number").float,
    integer: require("./number").integer,
  },
  person: {
    firstName: require("./person").firstName,
    lastName: require("./person").lastName,
    fullName: require("./person").fullName,
    phone: require("./person").phone,
    email: require("./person").email,
  },
};

// console.log(module.exports);
