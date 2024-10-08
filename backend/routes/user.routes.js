module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user.create);
  
    // Retrieve a single Tutorial with id
    router.get("/:email", user.findOne);
    router.post("/email", user.findOne);

    // Retrieve all user
    router.get("/", user.findAll);
  
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