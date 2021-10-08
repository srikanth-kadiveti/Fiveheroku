//npm init -y
const express=require('express') // npm i express
const eapp=express()
const fs=require('fs');


eapp.get('/student/studentList',(req,res)=>{  

    fs.readFile('./students.json',(err,data)=>{
      if(err) throw err;

    const students=JSON.parse(data);
    console.log(students)
    res.status(500).json(students);
  });
})

eapp.listen(4002)