const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema ({
  text: {
    type: String,
    required: [true, "Please Enter text"],
    trim: true
  },
  amount: {
    type: Number,
    required: [true, "Please Add Amount"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transaction", TransactionSchema);