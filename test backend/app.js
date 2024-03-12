const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const app = express();


var db = mongoose.connect("mongodb://127.0.0.1:27017/EmployeeDB");
db.then(() => {
  console.log("connected to mongodb");
}).catch((err) => {
  console.log(err);
});

app.use(express.json());

// initial endpoint
const employeeRouter = require('./routes/employees')

app.use('/employees',  employeeRouter);


app.listen(PORT, ()=> {
    console.log(`Server started on PORT ${PORT}`);
})