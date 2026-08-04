const express=require('express')
const multer=require("multer")
const uploadFile=require("./services/storage.service")
const app=express()
const postModel=require("./models/post.model")
const cors= require("cors")
const upload=multer({
    storage:multer.memoryStorage()
})
app.use(cors())
app.use(express.json())


app.post("/create-post",upload.single("image"),async(req,res)=>{
    const result =await uploadFile(req.file.buffer)
    const post=await postModel.create({
        url :result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"Post created successfully",
        post
    })
})

app.get("/posts",async (req,res)=>{
    const posts=await postModel.find()

    return res.status(200).json({
        message:"Post fetched successfully",
        posts
    })
})
module.exports=app