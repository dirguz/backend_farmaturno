const mongoose = require('mongoose');

const turnSchema = new mongoose.Schema(

  {
    date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: Boolean,
      default: true,
    },
    timeSlot: {
      type: Number,
      require: true
    },
    // customer: {
    //   customerId: {
    //     type: mongoose.Types.ObjectId
    //   },
    //   name: {
    //     type: String
    //   },
    //   surName: {
    //     type: String
    //   },
    //   identificationNumber: {
    //     type: Number,
    //     unique: true,
    //     require: true
    //   },
    //   mobilePhone: {
    //     type: Number,
    //     unique: true,
    //     require: true
    //   }
    // }
  },
  {
    timestamps: true,
    versionKey: false
    
  }

);


module.exports = mongoose.model('turn', turnSchema);