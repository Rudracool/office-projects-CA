const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');
const createError = require('http-errors');
const indexRouter = require('./routes/Login-Register/login.routes');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};


// parse requests of content-type - application/json
app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder jn." });
});

// require("./routes/Login-Register/login.routes.js")(app);
app.use('/api', indexRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});