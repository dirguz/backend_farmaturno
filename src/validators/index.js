const validators = {
  validatorMongoId: require('./mongoId.validator'),
  validatorCreateCustomer: require('./customer.validator'),
  validatorCreateTurn: require('./turn.validator'),
  validatorIdentification: require('./identification.validator'),
  validatorPhoneNumber: require('./phone.validator'),

}


module.exports = validators;