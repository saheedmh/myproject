
import './style/loginpage.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import Footer from './footer';





const  Loginpage = () => {
  const [emailong, setEmail] = useState("");
const [passwordlong, setPassword] = useState("")
const [flag, setFlag] =useState(false)
const [home, setHome]  =useState(true)

function handleLogin(){
  let mail = localStorage.getItem("Email").replace(/"/g," ")
  let pass = localStorage.getItem("Password").replace(/"/g," ")

  if(!emailong || !passwordlong){
    setFlag(true)
    console.log("empt")
  }
  else if(passwordlong !==pass || emailong !==mail){
    setFlag(true)
  }else{
    setHome(!home);
    setFlag(false)
  }

}


  
    return ( 
      <div>
        <div className="login-container">
        
         <form action="" className="login-form" onClick={handleLogin}>
            <h2>hi, welcome back</h2>
            
            <label>Email</label>
            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <label>password</label>
            <input type="password" name="" id="" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} /><br></br>
            <section>         
            <Link>forget password</Link>
            </section>
   
            <button  className='btn btn-lg bg-primary text-white'>login</button><br></br>
          
          <button className='btn btn-lg bg-primary text-white'  ><a href="https://facebook.com" className='text-white'>login with facebook</a></button><br></br><br />
          <button className='btn btn-lg bg-primary text-white'><a href="https://google.com" className='text-white'>login with google</a></button><br></br>
          
         </form> 
         </div>
         <Footer/> 
       </div>
         
     );
    
    }
 
export default Loginpage ;