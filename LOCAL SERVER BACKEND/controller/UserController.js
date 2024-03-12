const UserSchema = require('../models/UserModel')

const getAllUsers = async (req, res) => {
  res.status(200).json({
    message: "Get all users",
  });
};

const getUsers = async (req, res) => {
  const users = [
    {
      id: 1,
      name: "amit",
    },
    {
      id: 2,
      name: "raj",
    },
  ];

  res.status(200).json({
    message: "Get all users",
    data: users,
  });
};


const getAllUsersFromDb = async(req,res)=>{

    //select * from Users
   const users = await UserSchema.find()
   res.status(200).json({
         message: "Get all users",
         data:users
   })

}

// post method
/*
const addNewUser = async (req, res) => {
    const user = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        isActive: req.body.isActive
    })

    try{
        const saveUser = await user.save();
        res.json(saveUser);
    }
    catch(err){
        console.log('Error is ' + err);
    }

} */

const createUser = async(req, res)=> {
  const savedUser = await UserSchema.create(req.body)
  console.log('saved user ', savedUser);

  res.status(201).json({
    message:"Create user",
    data:savedUser
  })
  
}

// get by id
const getUserById = async(req, res)=> {

  const id = req.params.id;
  console.log('params....' , req.params);
  console.log('id', id);
  
  const user = await UserSchema.findById(id)

  res.status(200).json({
    message:'Getting the user by Id',
    data:user
  })

}

// delete method
const deleteUser = async(req, res)=> {
  const id = req.params.id;
  try{
    const removedUser = await UserSchema.findByIdAndDelete(id);
    if(!removedUser){
      return res.status(404).json({message:'No user with this ID was found.'})
    }
    else{
      res.status(200).json({message:"deleted user"})
    }
  }
  catch(err){
    res.status(500).json({
      message: err
    })
  }
}

// Update user
const updateUser = async (req,res)=>{
  const id = req.params.id;
  try {
    const updatedUser = await UserSchema.findByIdAndUpdate(id, req.body);
    if(!updatedUser){
      return res.status(404).json({message:'No user with this ID was found.'});
    }
    else{
      res.status(201).json({
        message : 'Updated user!'
      })
    }
  } 
  catch (error) {
    res.status(500).json({
      message: err
    })
  }
}






module.exports = {
  getAllUsers,
  getUsers,
  getAllUsersFromDb,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
