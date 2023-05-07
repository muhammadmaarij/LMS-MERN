var mongoose = require("mongoose");
var headSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Head", headSchema);
