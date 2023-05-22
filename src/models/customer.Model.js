const mongoose = require('mongoose');


const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    surName: {
      type: String
    },
    identificationNumber: {
      type: Number,
      unique: true,
      require: true
    },
    turnHistory: [
      {
        registry: {
          type: Date
        }
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('customer', CustomerSchema);
