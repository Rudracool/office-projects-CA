// module.exports = app => {
    const login = require("../../controllers/login.controller.js");
  
    var router = require("express").Router();
    const { signupValidation, loginValidation } = require('../email-validation/validation');
  
    // Create a new Tutorial
    // router.post("/login", login.create);
    const db  = require('../../models/db');
// const { signupValidation, loginValidation } = require('./validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 
 
router.post('/login',login.create, loginValidation)
// => {
//   db.query(
//     `SELECT * FROM customer WHERE email = ${db.escape(req.body.email)};`,
//     (err, result) => {
//       // user does not exists
//       if (err) {
//         // throw err;
//         return res.status(400).send({
//           msg: err
//         });
//       }
//       if (!result.length) {
//         return res.status(401).send({
//           msg: 'Email or password is incorrect!'
//         });
//       }
//       // check password
//       bcrypt.compare(
//         req.body.password,
//         result[0]['password'],
//         (bErr, bResult) => {
//           // wrong password
//           if (bErr) {
//             // throw bErr;
//             return res.status(401).send({
//               msg: 'Email or password is incorrect!'
//             });
//           }
//           if (bResult) {
//             const token = jwt.sign({id:result[0].id},'the-super-strong-secrect',{ expiresIn: '1h' });
//             db.query(
//               `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
//             );
//             return res.status(200).send({
//               msg: 'Logged in!',
//               token,
//               user: result[0]
//             });
//           }
//           return res.status(401).send({
//             msg: 'Username or password is incorrect!'
//           });
//         }
//       );
//     }
//   );
// });
  
    // Retrieve all login
    // router.get("/", login.findAll);
  
    // Retrieve all published login
    // router.get("/published", login.findAllPublished);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", login.findOne);
  
    // Update a Tutorial with id
    // router.put("/:id", login.update);
  
    // Delete a Tutorial with id
    // router.delete("/:id", login.delete);
  
    // Delete all login
    // router.delete("/", login.deleteAll);
  
    // app.use('/api/login', router);
//   };
module.exports = router;