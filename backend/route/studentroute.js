const {Router}=require('express');
const { getStudentdata, postStudentData } = require('../controller/studentcontroller');
const Student = require('../models/Student');

const router=Router();

router.get('/getstudent',getStudentdata);

router.post('/postStudent',postStudentData);

router.put('/updateStudent/:id',async (req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const updatedData=await Student.findByIdAndUpdate(id,data);
    res.send({data:updatedData,msg:"UpdateSuccessFully"});
})

router.delete('/deleteStudent/:id',async (req,res)=>{
    const id=req.params.id;
    const deleteData=await Student.findByIdAndDelete(id);
    res.send({DeleteData:deleteData, msg:"Data Deleted SuccessFully"})
})

module.exports=router;