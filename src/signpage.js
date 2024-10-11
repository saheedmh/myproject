
import './style/signup.css';
import  {useState} from 'react';
import { Alert } from 'react-bootstrap';
import Footer from './footer'
import Loginpage from './loginpage';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const Signuppage = () => {
  const [id, setId] = useState("");
  const [name, setFullname] = useState("");
 const [email, setEmail] = useState(""); 
  const [password, setpassword] = useState("");
  const navigate =useNavigate();
  const isValidate = () =>{
  let isProceed =true;
  let erroMessage = "please enter the valid info"
  if(id===null || id===''){
    isProceed = false;
    erroMessage += 'username'
  }
  if(name===null || name===''){
    isProceed = false;
    erroMessage += 'fullname'
  }
  if(email===null || email===''){
    isProceed = false;
    erroMessage += 'email'
  }
  if(password===null || password===''){
    isProceed  = false;
    erroMessage += 'password'
  }
  if(!isProceed){
    alert(erroMessage)
  }else{
    if(/^[a-zA-z0-9]+@[a-zA-z0-9]+\.[A-Za-z]+$/.test(email)){
      
    }else{
      isProceed=false;
      alert("enter the valid email")
    }
  }
  return isProceed;
  }
  
  const handleSubmit =(e)=>{
  e.preventDefault();
if(isValidate()){
  const item ={id, name,  email, password}
 console.log(item)
  fetch("http://localhost:3211/user", {
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(item)
  }).then((res) =>{
  alert("register  is successful" + res.data)
  
  navigate('/loginpage')
  // console.log("welcome to loginpage")
  }).catch((err) =>{
  alert("failed : " + err.message)
  })
}
  }
  




    
    return ( 
      
    
      <div className="signup-container ">
    
    
      <form  onSubmit={handleSubmit} className="signup-form bg-white">
           
        
          <h3>Sign Up</h3>

          
          <div className='form-group'>
            <label htmlFor="">username</label>
            <input type="text" className='form control' placeholder='userName' value={id} onChange={e => setId(e.target.value)} />
          </div>
     <br /><br />
          <div className='form-group'>
            <label htmlFor="">fullName</label>
            <input type="text" className='form control' placeholder='fullname' value={name} onChange={e => setFullname(e.target.value)}/>
          </div>
  <br /><br />
          <div className='form-group'>
            <label htmlFor="">Email</label>
            <input type="text" className='form control' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <br /><br />

          <div className='form-group'>
            <label htmlFor="">Password</label>
            <input type="password" className='form control' placeholder='Password' value={password} onChange={e => setpassword(e.target.value)} />
          </div>
          <br /><br />
          <button  className='btn btn-primary ' id="btnId" type='submit'>submit</button>
          <p >Already registered </p>  
          <Link>login in?</Link>  
        </form>
       
        <Footer/> 
        </div>  )    

}
 export default Signuppage;