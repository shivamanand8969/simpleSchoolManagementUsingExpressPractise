const Student = require("../models/Student")

module.exports.getStudentdata=async(req,res)=>{
     const data=await Student.find();
     res.status(200).send(data)
}

module.exports.postStudentData=async(req,res)=>{
    const data=req.body;
    const newStudent=new Student(data);
   const savedData= await newStudent.save();
   res.send({data:savedData,msg:"Data Saved SuccessFully"})
};
