const routes = require("next-routes")();
routes

  .add("/hospital/register", "/hospital/register")
  .add("/hospital/:address", "/hospital/hospitalDetails")
  .add("/patient/" , "/patient/");

module.exports = routes;
