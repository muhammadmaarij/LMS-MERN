var mongoose = require("mongoose");
var classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "Teacher",
  },
  student: {
    type: [
      {
        sid: {
          type: mongoose.Types.ObjectId,
          ref: "Student",
        },
      },
    ],
  },
});
module.exports = mongoose.model("Class", classSchema);
