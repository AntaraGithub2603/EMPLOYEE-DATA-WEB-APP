
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
 const connection = require("./db");
 const employees = require("./routes/employees");
//const userRoutes = require('./routes/users');
//const authRoutes = require("./routes/auth");
//database connection
 connection();
//middlewares
app.use(express.json())
app.use(cors());
//routes
app.use("/api/employees", employees);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));






