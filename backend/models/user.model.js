const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(  {
    email : String,
    password: String,
    firstName : String,
    lastName : String,
    apartNum : Number,
    telefon: String,
    vlastnik: Boolean,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;



/*


module.exports = mongoose => {
    var schema = new mongoose.Schema(
      {
        email : String,
        password: String,
        firstName : String,
        lastName : String,
        apartNum : Number,
        telefon: String,
        vlastnik: Boolean,
        roles: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
          }
        ]
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("user", schema);
    return User;
  };
*/

  /*  example  */

  /*
{
        email : String,
        firstName : String,
        lastName : String,
        apartNum : Number,
        telefon: String,
        vlastnik: Boolean
}
*/