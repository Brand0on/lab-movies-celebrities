// Your first model here
const mongoose = require("mongoose");

//Instantiating new Schema
const celebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: {
    type: String,
    required: true,
  },
});

//Create a new model
const Celebrity = mongoose.model("Celebrity", celebritySchema);

// Export model
module.exports = Celebrity;
