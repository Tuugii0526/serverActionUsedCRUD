import exp from 'constants'
import express from 'express'
import fs from 'fs'
const port =1234
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
console.log('Server started working')
res.json(
    {
        greeting:"hellow world"
    }
)
})
app.get('/product/get',(req,res)=>{
   fs.readFile("./lib/data.json","utf-8",(error,data)=>{
    if(error)
    {
        res.json(
            {
                success:false
            }
        )
    }
    let savedData=data ? JSON.parse(data) :[];
    res.json(
        {
            success:true,
            data:savedData
        }
    )
   })
})
app.listen(port,()=>{
    console.log(`server started working : http://localhost:${port}`)
})
