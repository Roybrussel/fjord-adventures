const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bookingNumber: Number,
    totalPrice: Number,
    activities: [{ type: Schema.Types.ObjectId, ref: "bookedActivity" }],
    confirmed: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = model("booking", bookingSchema);
