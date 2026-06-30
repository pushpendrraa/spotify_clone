const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes=require('')

const app=express();
app.use(express.json());
app.use(cookieParser())


module.exports=app;