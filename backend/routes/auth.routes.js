const controller = require("../controllers/auth.controller");
const {
  checkForDuplicates
} = require("../middlewares");
var router = require("express").Router();


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  console.log('\n\n f --> auth.routes.js \n controller = \n', controller)

  app.post(
    "/api/auth/check",
    [
      checkForDuplicates.checkDuplicateEmailOrTelefon
    ],

    controller.checkEmail
  )

  app.post(
    "/api/auth/checkEmail",
    [
      checkForDuplicates.checkDuplicateUsernameOrEmail
    ],

    controller.checkEmail
  )

  app.post(
    "/api/auth/signup",
    [
      checkForDuplicates.checkDuplicateUsernameOrEmail,
      checkForDuplicates.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
};