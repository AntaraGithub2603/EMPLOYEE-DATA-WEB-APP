const express = require("express");
const router = express.Router();
const {Employee, validator} = require('../models/employee');
const validate = require('../middleware/validate');
const isValidObjectId = require('../middleware/isValidObjectId');
const asyncHandler = require('../middleware/asyncHandler');

//Create an Employee

router.post(
    "/",
    validate(validator),
    asyncHandler(async(req,res) => {
        await Employee(req.body).save();
        res.status(200).send("Employee created successfully");
    //  try{
    //     const{ error } = validate(req.body);
    //     if(error)
    //         return res.status(400).send({ message:error.details[0].message});

    //     const user = await User.findOne({email:req.body.email});
    //     if(user)
    //         return res.status(409).send({ message:"User with given email already exist!"});

    //     const salt = await bcrypt.genSalt(Number(process.env.SALT));
    //     const hashPassword = await bcrypt.hash(req.body.password, salt);

    //     await new User({...req.body, password:hashPassword}).save();
    //     res.status(201).send({message:"User created successfully"})
    //  }catch(error){
    //     res.status(500).send({message: "Internsal Server Error"});
    //  }
})

);

//Get all Employees
router.get(
    "/",
    asyncHandler(async(req, res) => {
        const employees = await Employee.find();
        res.send(employees)
    })
)

//Get Employee by ID
router.get(
    "/:id",
    isValidObjectId,
    asyncHandler(async (req, res) => {
        const employee = await Employee.findById(req.params.id);
        res.send(employee);
    })
)

//Update Employee details
router.put(
    "/:id",
    [isValidObjectId, validate(validator)],
    asyncHandler(async(req, res) => {
        await Employee.findByIdAndUpdate({_id:req.params.id}, req.body);
        res.status(200).send("updated  successfully");
    })
);

//Delete Employee
router.delete(
    "/:id",
    isValidObjectId,
    asyncHandler(async(req, res) => {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).send("Employee deleted successfully");
    })
);

module.exports = router;