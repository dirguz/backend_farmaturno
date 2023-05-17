const {Router} = require('express');
const router = Router();
const {getCustomer, getCustomers, createCustomer, deleteCustomer} = require('../controllers/customer.controller');


/**
 * Get customer details
 */
router.get('/:id', getCustomer);

/**
 * Get list of customers
 */
router.get('/', getCustomers);

/**
 * Create customer in DB
 */
router.post('/', createCustomer);

/**
 * Delete customer
 */
router.delete('/:id', deleteCustomer);




module.exports = router;