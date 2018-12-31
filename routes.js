const routes = require("next-routes")();
routes

  .add("/hospital/register", "/hospital/register")
  .add("/hospital/:address", "/hospital/hospitalDetails")
  .add("/patient/", "/patient/")
  .add("/patient/record/:hash", "/patient/record")
  .add("/docotr", "/doctor");

module.exports = routes;
