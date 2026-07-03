 const {ImageKit}=require("@imagekit/nodejs")

 const ImageKitclient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});
async function uploadFile(file){
  const result= await ImageLitClient.file.upload({
    file,
    fileName:"music_"+Date.now(),
    folder:"spotify-backend/music"

  })
  return result;
}
module.exports={uploadFile};