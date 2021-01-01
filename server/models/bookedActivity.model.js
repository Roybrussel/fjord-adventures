const { Schema, model } = require("mongoose");

const bookedActivity = new Schema(
  {
    activity: String,
    date: Date,
    numberOfPeople: Number,
    price: Number,
    booking: {
      type: Schema.Types.ObjectId,
      ref: "booking",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("bookedActivity", bookedActivity);
