const mongoose = require("mongoose");

const savedSchema = mongoose.Schema({
  news: {
    type: Object,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

savedSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

savedSchema.set("toJSON", {
  virtuals: true,
});

exports.Saved = mongoose.model("Saved", savedSchema);
exports.savedSchema = savedSchema;
