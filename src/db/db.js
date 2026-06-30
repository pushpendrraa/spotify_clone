const mongoose=require('mongoose');


async function connectDb(){
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log("database connected successfully");

    }
    
    catch(error){
        console.error("database connection error", error)

    }
}

module.exports = connectDb;