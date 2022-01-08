const firstName = () => "virendra";
const lastName = () => "patel";
const fullName = () => `${firstName()} ${lastName()}`;
const email = (domain = "feelfreetocode.com") =>
  `${firstName()}${lastName()}@${domain}`;
const phone = () => {};

module.exports.firstName = firstName;
module.exports.lastName = lastName;
module.exports.phone = phone;
module.exports.email = email;
module.exports.fullName = fullName;
