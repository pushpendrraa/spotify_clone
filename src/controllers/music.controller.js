const musicModel=require("../models/music.model");
const {UploadFile}= require("../services/storage.service")
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
         const {title}= req.body;
    const file = req.file;
    const result=await UploadFile(file.buffer.toString('base64'));
    const music=await musicModel.create({
        uri: result.uri,
        title,
        artist:decode.id,

    })
    res.status(201).json({
        music:{
            id:music._id,
            uri:music.uri,
            titlr:music.title,
            artist:music.artist,
        }
    })
    } 
    catch(error){
        res.status(401).json({messae:"unauthorized"})
    }

   
}
module.exports={createMusic};