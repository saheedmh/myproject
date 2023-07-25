
import './style/signup.css';
import  {useState} from 'react';
import { Alert } from 'react-bootstrap';
import Footer from './footer'
import Loginpage from './loginpage';


const Signuppage = () => {
  const [name, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const  [flag, setFlag] = useState(false)
  const [login, setLogin] = useState(true)
 
  const handleSubmit =(e)=>{
  e.preventDefault();

  if(!name || !lastname ||!email || !password ){
    setFlag(true);
  }else{
    setFlag(false);
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Password", JSON.stringify(password));
    console.log("save in localstorage");
    setLogin(!login)
  }


  }
  function handleClick(){
    setLogin(!login)
  }
  
    
    return ( 
      
    
      <div className="signup-container ">
    
    <marquee behavior="" direction="horinzontal"><h1>welcome to HackYourFuture Institute</h1></marquee>
 
      <form  onSubmit={handleSubmit} className="signup-form bg-white">
           
        
          <h3>Sign Up</h3>

          
          <div className='form-group'>
            <label htmlFor="">First Name</label>
            <input type="text" className='form control' placeholder='First Name' onChange={(e) => setName(e.target.value)} />
          </div>
     <br /><br />
          <div className='form-group'>
            <label htmlFor="">Last Name</label>
            <input type="text" className='form control' placeholder='Last Name'  onChange={(e) => setlastName(e.target.value)}/>
          </div>
  <br /><br />
          <div className='form-group'>
            <label htmlFor="">Email</label>
            <input type="text" className='form control' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <br /><br />

          <div className='form-group'>
            <label htmlFor="">Password</label>
            <input type="text" className='form control' placeholder='Password' onChange={(e) => setpassword(e.target.value)} />
          </div>
          <br /><br />

          

          <button  className='btn btn-primary ' id="btnId">submit</button>
          <p onClick={handleClick}>Already registered {" "} login in?</p>

          {flag &&(
            <Alert className="text-white bg-danger variant-danger">
              Please fill every field
            </Alert>
          )}
        </form>
      
          
        <Footer/> 
        </div>   
     
    )
      

}
 export default Signuppage;