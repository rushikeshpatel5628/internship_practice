const router = require("express").Router();
const userController = require("../controller/UserController.js");
router.get("/users", userController.getAllUsers);
router.get("/users1", userController.getUsers);
router.get("/userfromdb",userController.getAllUsersFromDb);
// for post method
// router.post("/users", userController.addNewUser);
router.post("/createuser", userController.createUser);
// getting by id
router.get("/userbyid/:id", userController.createUser);
// delete user
router.delete("/user/:id", userController.deleteUser);
// update user
router.put("/user/:id", userController.updateUser);



module.exports = router;
