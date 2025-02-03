const db = require("../models");
const User = db.user;

/*
exports.findOne = (req, res) => {
  console.log(req.body)
  const email = ''//  req.body.email;
  var obj =

  User.find(req.body)
  .then(data => {
    res.send({
      exist: !!data.length
    })
  })
  .catch(err => {
    res
    .status(500)
    .send({
      message: "Chyba 500 email2=" + email
    });
  });
};

exports.findAll = (req, res) => {

  User.find()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Какая то Ощибко"
    });
  });
};
*/

//////  //////    U S E R    REQUEST  ///////

exports.allUsersData = (req, res) => {
  console.log('\n\n    - - C O N T R O L L E R - ->   ADMIN  <--- -')
  
	User.find()
		.then(data => {
			console.log("user find =");
			console.log(data);
			res.send({
				data
			});
			//if (!data.length)  res.send({exist:false})
			// res.status(404).send({ message: "Not found USER's EMAIL =" + email });
			//else res.send(data);
		})
		.catch(err => {
			console.log("admin get All Data Err");
			console.log(err);
			res.status(500).send({
				message: "Chyba 500\nADMUN  Eeerr = " + err
			});
		});

	//res.send(" ----------\n    GET  user Data  -->>  OK  \n End");
};
