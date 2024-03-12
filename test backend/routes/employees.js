const express = require('express');
const router = express.Router();
// const Employee = require('../models/employee');
const EmployeeController = require('../controller/employeeController.js')

// Get method
router.get("/getemp", EmployeeController.getEmployee);
// Post method
router.post("/createemp", EmployeeController.createEmployee);
// Get by id
router.get("/empbyid/:id", EmployeeController.getEmployeeById);
// Put method
router.put("/updateemp/:id", EmployeeController.updateEmployee);
// Delete method
router.delete("/removeemp/:id", EmployeeController.deleteEmployee);

module.exports = router;







// router.get('/', async(req, res)=> {
//     try{
//         const employees = await Employee.find()
//         res.json(employees)
//     }
//     catch(err){
//         res.send("Error is " + err);
//     }
// })

// router.post('/postdata', async(req, res)=> {

//     const employee = new Employee({
//         name:  req.body.name,
//         designation : req.body.designation,
//     })

//     try{
//         const saveEmployee = await employee.save();
//         res.json(saveEmployee);
//     }
//     catch(err){
//         console.log('Errror is ' + err);
//     }
// })

// module.exports = router;