// module.exports = app => {
    const login = require("../../controllers/login.controller.js");
  
    var router = require("express").Router();
    const { signupValidation, loginValidation } = require('../email-validation/validation');
  

 
 
    router.post('/login',login.create, loginValidation);

  
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