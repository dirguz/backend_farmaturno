const mongoose = require('mongoose');
const moment = require('moment');


const turnSchema = new mongoose.Schema(

  {
    date: {
      type: String,
      default:moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    status: {
      type: Boolean,
      default: true,
    },
    timeSlot: {
      type: String,
      require: true
    },
    customer: {
      customerId: {
        type: mongoose.Types.ObjectId
      },
      name: {
        type: String
      },
      surName: {
        type: String
      },
      identificationNumber: {
        type: Number,
        require: true
      },
      mobilePhone: {
        type: Number,
        require: true
      }
    }
  },
  {
    timestamps: true,
    versionKey: false
    
  }

);


module.exports = mongoose.model('turn', turnSchema);