const EmployeeSchema = require('../models/employee');

// Get method
const getEmployee = async(req, res)=> {
    try{
        const employees = await EmployeeSchema.find()
        res.status(200).json({
            message: "Get all employees",
            data: employees
        })
    }
    catch(err){
        res.send("Error is " + err);
    }

}

// Post method
const createEmployee = async(req, res)=> {
    const saveEmployee = await EmployeeSchema.create(req.body);
    console.log('saved employee ', saveEmployee);

    res.status(201).json({
        message : 'Data has been saved',
        data: saveEmployee
    })

    
}

// Get data by id
const getEmployeeById = async(req, res)=> {
    const id = req.params.id;

    const employee = await EmployeeSchema.findById(id);

    res.status(200).json({
        message: "Data retrived",
        data:  employee 
    })
}

// Put method
const updateEmployee = async (req, res)=> {
    const id = req.params.id;
    console.log(req.body)

    const employee = await EmployeeSchema.findByIdAndUpdate(id , req.body)
    if(!employee){
        return res.status(404).json({
            message :"No data found in the server!"
        })
    }
    const updatedEmployee = await EmployeeSchema.findById(id);
    res.status(200).json({
        message:"Data Updated Successfully!",
        data:updatedEmployee
    });

}

// Delete method
const deleteEmployee = async (req,res)=>{
    const id= req.params.id;
    const deleteemp = await EmployeeSchema.findByIdAndDelete(id)
    if (!deleteemp) {
        return res.status(404).json({message:'No Data Found'})
    }
    res.status(200).json({
        message:"Deleted Succesfully",
        data: deleteemp
    });
    
}


module.exports = {
    getEmployee,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}