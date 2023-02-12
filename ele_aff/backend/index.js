import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/ElectronicAffidavit",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},function(err){
    if(err){
        console.log(err);
    }else{
        console.log('MongoDB connection successfull');
    }
});

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User=new mongoose.model("User",userSchema)

app.post("/login",(req,res)=>{
    const { email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Login successfull",user:user})
            }else{
                res.send({message:"Password dosen't match"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
})

app.post("/register",(req,res)=>{
    const { name,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }else{
            const user=new User({
                name,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully registered,you can login now!"})
                }
            })
        }
    })
    
    
})
app.listen(3001,()=>{
    console.log("Started at port 3001");
})