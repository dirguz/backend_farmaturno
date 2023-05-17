const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { customerModel } = require("../models");

/**
 * Get customer details
 * @param {*} req
 * @param {*} res
 */
const getCustomer = async (req, res) => {
  try {
    res.status(200).send("In the getCustomer controller");
    
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "getCustomer", error);
  }
};

/**
 * Get customer list from DataBase
 * @param {*} req
 * @param {*} res
 */
const getCustomers = async (req, res) => {
  try {
    res.status(200).send("In the getCustomers controller");
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "getCustomers", error);
  }
};

/**
 * Create customer in DataBase
 * @param {*} req
 * @param {*} res
 */
const createCustomer = async (req, res) => {
  try {
    res.status(200).send("In the createCustomer controller");
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 400, "createCustomer", error);
  }
};

/**
 * Delete customer from DataBase
 * @param {*} req
 * @param {*} res
 */
const deleteCustomer = async (req, res) => {
  try {
    res.status(200).send("In the deleteCustomer controller");
  } catch (error) {
    handleHttpError(res, "Internal Server Error", 500, "deleteCustomer", error);
  }
};

module.exports = {
  getCustomer,
  getCustomers,
  createCustomer,
  deleteCustomer,
};
