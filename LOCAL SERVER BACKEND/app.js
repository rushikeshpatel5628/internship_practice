const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const PORT = 4000;

//connect to mongodb
var db = mongoose.connect("mongodb://127.0.0.1:27017/testdata");
db.then(() => {
  console.log("connected to mongodb");
}).catch((err) => {
  console.log(err);
});

app.use(cors())
app.use(express.json());

//require all routes...

const userRoutes = require("./routes/UserRoutes.js")
const employeeRoutes = require("./routes/EmployeeRoutes.js")
const categoryRoutes = require("./routes/CategoryRoutes.js")
const productRoutes = require("./routes/ProductRoutes.js")
const uploadRoutes = require("./routes/UploadRoutes.js")

//provinding to server all routes...
app.use("/users", userRoutes);
app.use("/employees",employeeRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/upload", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
