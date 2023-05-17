const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { turnModel } = require("../models");

/**
 * Get Turn by id
 * @param {*} req
 * @param {*} res
*/
const getTurn = async (req, res) => {
    const id = req.params.id.toString();
    try {
      const finded= await turnModel.findById(id);
      res.status(200).send(finded);
      
    } catch (error) {
      handleHttpError(res, "Internal Server Error", 500, "getTurn", error);
    }
};

/**
 * Get Turns from DataBase
 * @param {*} req
 * @param {*} res
*/
const getAllTurns = async (req, res) => {
  const turns = await turnModel.find({});
    try {
      res.status(200).send(turns);
    } catch (error) {
      handleHttpError(res, "Internal Server Error", 500, "getAllTurns", error);
    }
};

/**
 * Create Turn in DataBase
 * @param {*} req
 * @param {*} res
*/
const createTurn = async (req, res) => {
    const body=req.body;
    try {
      await turnModel.create(body);
      res.status(200).send("Turn created");
    } catch (error) {
      handleHttpError(res, "Internal Server Error", 400, "createTurn", error);
    }
};

/**
 * Modify Turn-status in DataBase
 * @param {*} req
 * @param {*} res
 */
const modifyTurn = async (req, res) => {
   const id = req.params.id.toString();
   const modify= await turnModel.updateOne({ _id: id }, {status: false });
   try {
     const finded= await turnModel.findById(id);
      res.status(200).send(finded);
   } catch (error) {
      handleHttpError(res, "Internal Server Error", 500, "modifyTurn", error);
    }
  };

  module.exports = {
    getTurn,
    getAllTurns,
    createTurn,
    modifyTurn
  };