var mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  title: String,
  description: String,
  
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
