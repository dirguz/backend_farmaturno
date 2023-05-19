const {Router} = require('express');
const router = Router();
const {validatorMongoId, validatorIdentification, validatorCreateCustomer, validatorPhoneNumber} = require('../validators');
const {getCustomerById, getCustomerByIdentificationNumber, getCustomers, createCustomer, updateCustomer, deleteCustomer} = require('../controllers/customer.controller');


/**
 * Get customer details by id
 */
router.get('/:id',validatorMongoId, getCustomerById);

/**
 * Get customer details by identification number
 */
router.get('/in/:in',validatorIdentification, getCustomerByIdentificationNumber);

/**
 * Get list of customers
 */
router.get('/', getCustomers);

/**
 * Create customer in DB
 */
router.post('/',validatorCreateCustomer, createCustomer);

/**
 * Create customer in DB
 */
router.put('/:id',validatorMongoId, validatorPhoneNumber, updateCustomer);

/**
 * Delete customer
 */
router.delete('/:id',validatorMongoId, deleteCustomer);




module.exports = router;