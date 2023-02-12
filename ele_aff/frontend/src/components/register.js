import React,{useState} from 'react'
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register =()=> {

    const navigate=useNavigate()

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    const handleChange=e=>{
        const{name,value}=e.target 
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const register = () =>{
        const {name,email,password,reEnterPassword} =user
        if(name && email && password && (password === reEnterPassword)){
            alert("posted")
            axios.post("http://localhost:3001/register",user)
            .then(res=>{
                alert(res.data.message)
                navigate("/login")})
        }else{
            alert("invalid input")
        }
        
    }

    return (
        <div className='register'>
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder='Enter your Name' onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder='Enter your password' onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Confirm password' onChange={handleChange}></input>
            <div className='button' onClick={register}>Register</div>
            <div>or</div>
            <div className='button' onClick={()=>navigate("/login")}>Login</div>
                
        </div>
    );
    
}
 
export default Register;