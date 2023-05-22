const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { turnModel, customerModel } = require("../models");

/**
 * Get Turn by id
 * @param {*} req
 * @param {*} res
*/
const getTurn = async (req, res) => {
    
    const id = req.params.id.toString();
    const find= await turnModel.findById(id);
    try {
      if (!find) {
      handleHttpError(res, "Id not found", 404, "getTurn");
      return;
     } else {
      res.status(200).send(find);
     }
    } catch (error) {
      handleHttpError(res, "Internal Server Error", 500, "getTurn", error);
    }
};

/**
 * Get Turn by user document
 * @param {*} req
 * @param {*} res
*/
const getTurnByDI = async (req, res) => {
    
    const doc = req.params.doc;
    const find= await turnModel.find({"customer.identificationNumber":{$eq:doc}});
    console.log(find);
    try {
      if (!find.length) {
      handleHttpError(res, "Turns for document not found", 404, "getTurn");
      return;
     } else {
      res.status(200).send(find);
     }
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
      if(!turns.length){
        handleHttpError(res, "Turns not Found", 404, "getAllTurns");
        return;
      }else{
        res.status(200).send(turns);
      }
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
    
   const body=matchedData(req);
   const user= await customerModel.find({identificationNumber:{$eq:body.identificationNumber}});
    const newUser={
      name:body.name,
      surName:body.surName,
      identificationNumber:body.identificationNumber,
      mobilePhone:body.mobilePhone,
    }
    const newTurn={
      timeSlot: body.timeSlot,
      customer: {
      customerId: body.customerId,
      name:body.name,
      surName:body.surName,
      identificationNumber:body.identificationNumber,
      mobilePhone:body.mobilePhone,
    }
  }
    try {
      if (!user.length) {
        await customerModel.create(newUser);
        await customerModel.updateOne({identificationNumber:body.identificationNumber},{turnHistory:[{registry:new Date(Date.now()).toISOString()}]});
        await turnModel.create(newTurn);
        res.status(200).send("User and Turn created");
      }else{
        await turnModel.create(newTurn);
        await customerModel.updateOne({identificationNumber:body.identificationNumber},{$push:{turnHistory:[{registry:new Date(Date.now()).toISOString()}]}});
        res.status(200).send("Turn created");
      }
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
   await turnModel.updateOne({ _id: id }, {status: false });
   try {
     const find= await turnModel.findById(id);
      res.status(200).send("Turn update: "+find);
   } catch (error) {
      handleHttpError(res, "Internal Server Error", 500, "modifyTurn", error);
    }
  };

  module.exports = {
    getTurn,
    getAllTurns,
    createTurn,
    modifyTurn,
    getTurnByDI
  };