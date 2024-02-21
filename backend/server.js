const express=require('express');
const mongoose=require('mongoose');
const router = require('./route/studentroute');
const teacherroute = require('./route/adminroute');
require('dotenv').config();
const app=express();

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.MONGOURI).then(()=>{
    console.log("Database connected")
})
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("sever is running")
})

app.use('/api/student',router);
app.use('/api/teacher',teacherroute);
app.listen(PORT,()=>{
    console.log("Serrver is running")
})