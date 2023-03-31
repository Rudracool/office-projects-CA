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
                res.status(err.status).send(err);
            }

        }else{
            
            
        } 
       
      });
    
    // db.query(
    //     `SELECT * FROM customer WHERE email = ${db.escape(req.body.email)};`,
    //     (err, result) => {
    //         // user does not exists
    //         if (err) {
    //             // throw err;
    //         return res.status(400).send({
    //           msg: err
    //         });
    //     }
    //     if (!result.length) {
    //         return res.status(401).send({
    //             msg: 'Email or password is incorrect!'
    //         });
    //     }
        
    //     // check password

    //     bcrypt.hash(req.body.password, 10, function(err, hash) {
    //         if (err) { throw (err); }
        
    //         bcrypt.compare(result[0]['custentity_password'], hash, function(bErr, bResult) {
    //             // if (brr) { throw (berr); }
    //             if (bErr) {
    //                 // throw bErr;
    //                 return res.status(401).send({
    //                     msg: 'Email or password is incorrect!'
    //                 });
    //             }
                
    //             if (bResult) {
                    
    //                 const token = jwt.sign({id:result[0].CUST_ID},'the-super-strong-secrect',{ expiresIn: '1min' });
                    
    //                 db.query(
    //                         `UPDATE customer SET last_login = now() WHERE CUST_ID = '${result[0].CUST_ID}'`
    //                         );
    //                         return res.status(200).send({
    //                             msg: 'Logged in!',
    //                             token,
    //                             user: result[0]
    //                         });
    //                     }
    //                     return res.status(401).send({
    //                         msg: 'Username or password is incorrect!'
    //                     });
    //                 }
    //                 );
    //             }
    //             );
    //         });

};
            
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
                
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