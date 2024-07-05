const mongoose = require("mongoose");
const asyncHandler = require("./middleware/asyncHandler");
module.exports = asyncHandler(async() => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useUnifiedTopology: true,
};

    const connection = await mongoose.connect(process.env.DB, connectionParams);
    connection
        ? console.log("connected to database")
        :console.log("couldn't connect to our database!")
    /*try{
        mongoose.connect(process.env.DB,connectionParams);
        console.log("Connected to database successfully")
    } catch(error) {
        console.log(error)
        console.log("couldn't connect to our database!");
    }*/
});