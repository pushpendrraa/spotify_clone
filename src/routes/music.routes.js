const express=require("express");
const musiccontroller=require("../controllers/music.controller")
const multer= require("multer");


const upload=multer({
    storage:multer.memoryStorage()
})

const router=express.Router();
router.post("/upload",upload.single("music"),musiccontroller.createMusic);
router.post("/createAlbum",musiccontroller.createAlbum);


module.exports=router;