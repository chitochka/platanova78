const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller.js");


module.exports = app => {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    var router = require("express").Router();
  

    router.get(      "/getWater",       [authJwt.verifyToken],      controller.getWater    )
    router.post(      "/setWater",       [authJwt.verifyToken],      controller.setWater    )

    // Create a new Tutorial
    router.post("/", controller.create);
  
    // Retrieve a single Tutorial with id
    router.get("/:email", controller.findOne);
    router.post("/email", controller.findOne);
    router.post("/telefon", controller.findOne);

    // Retrieve all user
    router.get("/", controller.findAll);
  
    /*
    // Retrieve all published user
    router.get("/published", user.findAllPublished);
  
    // Update a Tutorial with id
    router.put("/:id", user.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", user.delete);
  
    // Delete all user
    router.delete("/", user.deleteAll);

    */
  
    app.use('/api/user', router);
  };