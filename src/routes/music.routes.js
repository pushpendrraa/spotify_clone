const express=require("express");
const musiccontroller=require("../controllers/music.controller");
const authMiddleware=require("../middlewares/auth.middleware");
const multer= require("multer");


const upload=multer({
    storage:multer.memoryStorage()
})

const router=express.Router();
router.post("/upload",authMiddleware.authArtist,upload.single("music"),musiccontroller.createMusic);
router.post("/createAlbum",authMiddleware.authArtist,musiccontroller.createAlbum);


module.exports=router;