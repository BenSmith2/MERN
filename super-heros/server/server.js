//express
const express = require("express");

//import mongoose
const mongoose = require("mongoose")

//import cors
const cors = require("cors")

//crete instance of express
const app = express();

//select our port
const port = 8000;

//enable cors
app.use(cors())

//use express and return json
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//connect to mongoose config
require("./config/mongoose.config")

//import routes and include (app) for express
const heroapp = require("./routes/hero.routes") 
heroapp(app)

//app listen for connections
app.listen(port, () => {console.log(`Listening on port ${port}`)})

/*
1.install express
2 install mongoose
3 install cors
npm install mongoose express cors

Front End
1. Axios
2. React Router Dom
3. Bootstrap

npm install axios react-router-dom react-bootstrap bootstrap

*/

