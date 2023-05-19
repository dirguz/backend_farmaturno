const {check} = require('express-validator');
const validateResults = require('../utils/handleValidators');


const validatorPhoneNumber = [

 
  check('mobilePhone')
  .exists()
  .notEmpty()
  .isNumeric()
  .isLength({min: 10, max: 10}),
  

  (req, res, next) => {
    return validateResults(req, res, next);
  }
]





module.exports = validatorPhoneNumber;