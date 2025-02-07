const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];
	console.log("\n\nf --> verifyToken\n  x-access-token =  ");
	console.log(token);
	if (!token) {
		return res.status(403).send({ message: "No token provided!" });
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: "Unauthorized!"
			});
		}
		req.userId = decoded.id;
		next();
	});
};

isAdmin = (req, res, next) => {
	console.log("\n - - - - Run Function - - - -\n  - - - f --> isAdmin");

	// 1
	User.findById({ _id: req.userId })
		.then(user => {
			//1
			console.log("\n\n f -> OK OK ");
			console.log("\n\n user= ", user);

			// 2
			Role.find({ _id: { $in: user.roles } })
				.then(roles => {
					// 2
					console.log(
						"\n\n ------=  T H E N    2  ------\n ROLES = "
					);
					console.log(roles);
					for (let i = 0; i < roles.length; i++) {
						console.log(`\nuser.roles[${i}]=`);
						console.log(user.roles[i]);
						if (roles[i].value === "ADMIN") {
							next();
							return;
						}
						res.status(403).send({
							message: "Require Admin Role!"
						});
						return;
					}
				})
				.catch(err => {
					// 2
					console.log("\n\n ------=  C A T C H    2  ------");
					res.status(500).send({ message: err });
					return;
				});
			//
		})
		.catch(err => {
			// 1
			console.log("Errrror in f-findById", err);
			res.status(500).send({ message: err });
			return;
		});

	console.log("\n - - - - --> isAdmin   ---> 2222");
};

const authJwt = {
	verifyToken,
	isAdmin
};

module.exports = authJwt;
