const musicModel=require("../models/music.model");
const albumModel=require("../models/album.model");
const jwt = require('jsonwebtoken');
const { uploadFile } = require("../services/storage.service");
async function createMusic(req,res){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:"unauthorizeddd"})
    }
   
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role != "artist"){
            return res.status(403).json({message:"You dont have an access to create music"})
        }
         const {title}= req.body;
    const file = req.file;
    const result=await uploadFile(file.buffer.toString('base64'));
    const music=await musicModel.create({
        uri: result.uri,
        title,
        artist:decoded.id,

    })
    res.status(201).json({
        music:{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist,
        }
    })
    } 
    catch(error){
        console.log(error);
    }

   
}
async function createAlbum(req,res){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"unauthorized"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role!=="artist"){
            return res.status(403).json({message: "you dont have access to create an album"})
        }
        const {title ,musics} =req.body;
        const album = await albumModel.create({
            title,
            artist: decoded.id,
            musics:musics,
        })
        res.status(201).json({
            message: "album created Successfully",
            album:{
                id: album._id,
                title:album.title,
                musics:album.musics
            }

        })

    }
    catch(err){
        console.log(err);
        return res.status(401).json({meassage: "unauthorized"})
    }

}
module.exports={createMusic,createAlbum};