const Teacher = require("../models/Teacher")

module.exports.getTeacherData=async (req,res)=>{
    const data=await Teacher.find();
    res.send(data);
}
module.exports.postTeacherData=async (req,res)=>{
    const data=req.body;
    const newTeacher=new Teacher(data);
   const saveTeacher= await newTeacher.save();
   res.send({data:saveTeacher,msg:"Data posted SuccessFully"})
}

module.exports.updateTeacherData=async (req,res)=>{
    const data=req.body;
    const id=req.params.id;
    const updatedata=await Teacher.findByIdAndUpdate(id,data);
    res.status(200).send({updatedata:updatedata,msg:"Data Updated SuccessFully"});
}
module.exports.deleteTeacherData=async (req,res)=>{
    const id=req.params.id;
    const deletedData=await Teacher.findByIdAndDelete(id);
    res.status(200).send({deletedData:deletedData,msg:"Data Deleted SuccessFully"})
}