const { Schema, model } = require("mongoose");
const User = require("./user.model");

const myBookingSchema = new Schema(
  {
    bookingNumber: Number,
    description: String,
    activities: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("booking", myBookingSchema);
