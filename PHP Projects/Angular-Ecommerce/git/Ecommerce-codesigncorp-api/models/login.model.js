const sql = require("./db.js");
// const { signupValidation, loginValidation } = require('../routes/email-validation/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// constructor
const login = function(login) {

  this.email = login.email;
  this.password = login.password;


};

login.create = (Data, resultData) => {

    sql.query(
        `SELECT * FROM customer WHERE email = ${sql.escape(Data.email)};`,
        (err, results) => {
            // user does not exists
            if (err) {
                // throw err;
                let obj = {
                    status:400,
                    msg:err
                }
                resultData(obj);
                return;

        }


        
        if (!results.length) {
            let obj = {
                status:401,
                msg:'Email or password is incorrect!'
            }
            resultData(obj);
            return;
           
        }
        
        // check password

        bcrypt.hash(Data.password, 10, function(err, hash) {
            if (err) { throw (err); }
        
            bcrypt.compare(results[0]['custentity_password'], hash, function(bErr, bResult) {

                if (bErr) {

                    let obj = {
                        status:401,
                        msg:'Email or password is incorrect!'
                    }
                    resultData(obj);
                    return;

                }
                
                if (bResult) {
                    
                    const token = jwt.sign({id:results[0].CUST_ID},'the-super-strong-secrect',{ expiresIn: '1min' });
                    
                    sql.query(
                            `UPDATE customer SET last_login = now() WHERE CUST_ID = '${results[0].CUST_ID}'`
                            );
                            const obj = {
                                status:200,
                                msg: 'Logged in!',
                                token,
                                user: results[0]
                            }
                            resultData(obj);
                            return;
                          
                        }
                        let status = {
                            status:401,
                            msg: 'Username or password is incorrect!'
                           
                        }
                        resultData(status);
                        return ;
                       
                    });
                });
            });
};







// Tutorial.findById = (id, result) => {
//   sql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found tutorial: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found Tutorial with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// Tutorial.getAll = (title, result) => {
//   let query = "SELECT * FROM tutorials";

//   if (title) {
//     query += ` WHERE title LIKE '%${title}%'`;
//   }

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("tutorials: ", res);
//     result(null, res);
//   });
// };

// Tutorial.getAllPublished = result => {
//   sql.query("SELECT * FROM tutorials WHERE published=true", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("tutorials: ", res);
//     result(null, res);
//   });
// };

// Tutorial.updateById = (id, tutorial, result) => {
//   sql.query(
//     "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
//     [tutorial.title, tutorial.description, tutorial.published, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found Tutorial with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated tutorial: ", { id: id, ...tutorial });
//       result(null, { id: id, ...tutorial });
//     }
//   );
// };

// Tutorial.remove = (id, result) => {
//   sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found Tutorial with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted tutorial with id: ", id);
//     result(null, res);
//   });
// };

// Tutorial.removeAll = result => {
//   sql.query("DELETE FROM tutorials", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} tutorials`);
//     result(null, res);
//   });
// };

module.exports = login;