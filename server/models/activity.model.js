const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    area: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    bookings: [
      {
        type: Schema.Types.ObjectId,
        ref: "booking",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Activity", activitySchema);
