const { integer } = require("../number");
const { states } = require("./data");

const state = () => states[integer(states.length)];

module.exports.state = state;

// for (let index = 0; index < 10000; index++) {
//   console.log(state());
// }
