const app=require('./src/app');
require('dotenv').config();
const connectDb=require('./src/db/db');

connectDb();





app.listen(process.env.PORT_NO,()=>{
    console.log(`Server is running on port ${process.env.PORT_NO}`);
})