const { authJwt } = require("../middlewares");
const controller = require("../controllers/admin.controller.js");

module.exports = app => {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	var router = require("express").Router();
	app.use("/api", router);

	router.get(
		"/admin/getAllUsersData",
		[authJwt.verifyToken, authJwt.isAdmin],
		controller.allUsersData
	);

	router.get(
		"/admin/getAllUsersData",
		[authJwt.verifyToken, authJwt.isAdmin],
		controller.allUsersData
	);

	/*
  router.get("/getWater",
    [authJwt.verifyToken],
    controller.getWater
  )
*/

	/*
    // Retrieve all published user
    router.get("/published", user.findAllPublished);
    // Update a Tutorial with id
    router.put("/:id", user.update);
    // Del Tutorial by id //,router.delete("/:id", user.delete);
    // Delete all user
    router.delete("/", user.deleteAll);

    */
};
