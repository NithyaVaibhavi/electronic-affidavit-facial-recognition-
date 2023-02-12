
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Homepage from './components/homepage';
import {BrowserRouter as Router,Routes,Route,Link}from "react-router-dom"
import { useState } from 'react';

 
function App() {
  const[user,setLoginUser]=useState({})
  return (

    <div className="App">
      <Router>
        <Routes>
          {
            user && user._id ? <Route exact path="/" element={<Homepage setLoginUser={setLoginUser}/>}></Route> : <Route path="/" element={<Login setLoginUser={setLoginUser}/>}></Route>
          }
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
        </Routes>
      </Router> 
      
    </div>
  );
}

export default App;
