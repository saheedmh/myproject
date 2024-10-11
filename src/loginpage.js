
import './style/loginpage.css';
import {Link} from 'react-router-dom';
import { useEffect, useState} from 'react';
import Footer from './footer';
import Home from './homepage';
import {Alert} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






const   Loginpage = ()=>{
  const [id, setId]= useState("");
  const [password, setpassword]= useState("")
   const navigate = useNavigate();
  const handleLogin =(event) => {
   
    event.preventDefault();
    if(validate()){
      //implementation
      //console.log("proceed")
      fetch("http://localhost:3210/user" +id).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
        if(Object.keys(resp).length===0){
          alert("enter valid infor")
        }else{
          if(resp.password===password){
            navigate('/')
          }
          else{
            alert("enter valid credential");
          }
        }
         
}).catch((err)=>{
        console.log("error due to failed" + err.message)
      })
     

    }
  }
  const validate = ()=>{
  
    let result = true;
    if(id==="" || id ===null){
     result = false;
     alert("please enter username")
    }

    if(password==="" || password ===null){
      result =false;
      alert("please enter password")
     }
    return result;
  }

    return ( 
      
   
       
      <div>
       <div className="login-container">
         <form action="" className="login-form" onClick={handleLogin}>
            <h2>hi, welcome back</h2>
            
            <div className='form-group'>
            <label htmlFor="">username</label>
            <input type="text" className='form control' placeholder='userName' value={id} onChange={e => setId(e.target.value)} />
          </div>

             <div className='form-group'>
            <label htmlFor="">password</label>
            <input type="text" className='form control' placeholder='userName' value={password} onChange={e => setpassword(e.target.value)} />
          </div>
            <button  className='btn btn-lg bg-primary text-white' type='submit'>login</button><br></br>
            <Link className="btn btn-success" to={'./signpage'}>new users</Link>
          <button className='btn btn-lg bg-primary text-white'  ><a href="https://facebook.com" className='text-white'>login with facebook</a></button><br></br><br />
          <button className='btn btn-lg bg-primary text-white'><a href="https://google.com" className='text-white'>login with google</a></button><br></br>
    </form>
         
        </div>
        
       </div>
         
     );
    
    } 
  export default Loginpage;
 
