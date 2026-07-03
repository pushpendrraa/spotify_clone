const musicModel=require("../models/music.model");

async function createMusic(req,res){
    const token=req.cookies.token;
    if(!token){
        res.status(401).json({message:"unauthorized"})
    }
   
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRATE);
        if(decoded.role!= "artist"){
            res.status(403).json({message:"You dont have an access to create music"})
        }
    } 
    catch(error){
        res.status(401).json({messae:"unauthorized"})
    }
}