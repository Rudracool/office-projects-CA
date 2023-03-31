const login = require("../models/login.model.js");
const { signupValidation, loginValidation } = require("../routes/email-validation/validation");
const db = require("../models/db");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            msg: "Content can not be empty!" 
        });
    }
    var LoginModel = new login({
        email:req.body.email,
        password:req.body.password
    })
    login.create(LoginModel, (err, data) => {
        if (err){
            if(err.status){
                res.cookie('auth',err.token);
                res.status(err.status).send(err);
            }

        }
    });
};
            
// Retrieve all Tutorials from the database (with condition).
exports.authenticate = (req, res) => {
    
}; 
// Find a single Tutorial with a id
exports.findOne = (req, res) => {
                
};
            
// find all published Tutorials
exports.findAllPublished = (req, res) => {
                
};
            
            
// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};