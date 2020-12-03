const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: String,
  description: String,
  booking: {
    type: Schema.Types.ObjectId,
    ref: "booking",
  },
});

module.exports = model("Task", taskSchema);
