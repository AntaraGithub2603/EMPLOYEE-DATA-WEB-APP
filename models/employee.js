const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");
const employeeSchema =  mongoose.Schema({
    name: {type:String, required:true },
    email: {type:String, required:true },
    mobile: {type:String, required:true }
    
});



/*userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"1800d"});
    return token
};*/

const Employee = mongoose.model("employee",employeeSchema);

const validator =(data) => {
    const schema = Joi.object({
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        mobile:Joi.string()
        .length(10)
        .regex(/^\d+$/)
        .message({"string.pattern.base":"Please enter valid mobile number"}).required()
    });
    return schema.validate(data)
};

module.exports= {Employee, validator};
