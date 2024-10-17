import { NavLink } from "react-router-dom";
import {Columns, Menu, X} from "lucide-react"
import { useState } from "react";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
function Navigate() {
  return (
    <>


<div className="flex gap-5  justify-between ml-9 items-center"   style={{}}>
          <NavLink  className="no-underline text-white ml-10 capitalize" to='/' >home</NavLink>
            <NavLink className='no-underline  text-white  capitalize  ' style={{whiteSpace:"nowrap"}} to={'/program'} >the program</NavLink>
            <NavLink className="no-underline  text-white capitalize" to={'/about'}>about</NavLink>
            <NavLink className='no-underline  text-white capitalize' to={'signpage'}>signUp</NavLink>
            <NavLink className='no-underline  text-white capitalize'  to={'register'}>register</NavLink>
            
            <NavLink  className='no-underline  text-white capitalize'  to={'/loginpage'}>login</NavLink>
            
            <NavLink  className="mt-auto text-white capitalize" to={'/registercomponent'}>
            <button type='button' className='btn mt-3 text-white capitalize'>apply now</button></NavLink>
            
   
</div>

          
    </>
    
  );
}


const NavComponent =()=>{
  const [isOpen, setIsOpen] = useState(false)
const logoImg = {
  
width:"40px",
hegiht:"30px",
marginight:"40px",
marginLeft:"40px",
display:"inline-block"

}
 
  const togglenavbar = ()=>{
    setIsOpen(!isOpen)
  }
  return(
    <>

<nav className=" flex w-1/3 justify-start  text-white"  onClick={()=> setIsOpen(!isOpen)}>
<div className="logo_img" style={{width:"100%",  display:"flex", flexWrap:"wrap"}}>
<img src="./images/logo.png" alt="" className='w-4.5 h-3-5 ' style={logoImg}  />

</div>
    <div className=" hidden w-full justify-between md:flex no-underline">
    <Navigate/>
    </div>
    
    
    <div className="md:hidden">
      <button onClick={togglenavbar}>
        {isOpen ?<Menu/>  :<X/> }
      </button>
    </div>

    
  </nav>

  {isOpen &&
  <div className=" sm:flex   items-center " style={{flexDirection:Columns}}>

  <Navigate/>
  </div >
 

  }
    </>
  
  )
}
export default NavComponent;