var mongoose = require("mongoose");
var adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Admin", adminSchema);
