const {Router}=require('express');
const { getTeacherData, postTeacherData, updateTeacherData, deleteTeacherData } = require('../controller/AdminController');

const teacherroute=Router();

teacherroute.get('/getTeacherdata',getTeacherData);
teacherroute.post('/postTeacherData',postTeacherData);
teacherroute.put('/updateTeacher/:id',updateTeacherData);
teacherroute.delete('/deleteTeacherDat/:id',deleteTeacherData);

module.exports=teacherroute;