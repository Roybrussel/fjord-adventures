const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    myBookings: [{ type: Schema.Types.ObjectId, ref: "booking" }],
    agent: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
