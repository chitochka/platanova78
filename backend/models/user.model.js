module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        email : String,
        password: String,
        firstName : String,
        lastName : String,
        apartNum : Number,
        telefon: String,
        vlastnik: Boolean
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