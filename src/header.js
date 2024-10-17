import './style/header.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-brands-svg-icons'
import { faBars} from '@fortawesome/free-brands-svg-icons'
import {Menu, X} from "lucide-react"

import {NavLink} from 'react-router-dom';
const Header = () => {
    const [ismobile, setIsmobile] = useState(false);
     const navlinkstyle =({isActive}) =>{
 return{
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration:isActive ? 'underline' : 'none',
    background:isActive ? "#4A8CBB" : "none",
    
 }
}

    return (  
        <>
          <div className="main-header">
        <img src="./images/logo.png" alt="" className='header-logo' />
       
        <div className={ismobile ? "nav-link-mobile" : "nav-link"} id="menulist" onClick={() => setIsmobile(false)} >
          
           
          <NavLink className='link' style={navlinkstyle} to='/' >home</NavLink>
            <NavLink className='link'   style={{whiteSpace:'nowrap',}  }  to={'/program'} >the program</NavLink>
            <NavLink className='link' style={navlinkstyle} to={'/about'}>about</NavLink>
            <NavLink className='link' style={navlinkstyle} to={'signpage'}>signUp</NavLink>
            <NavLink className='link' style={navlinkstyle} to={'register'}>register</NavLink>
            
            <NavLink className='link' to={'/loginpage'}>login</NavLink>
            
            <NavLink className='link' to={'/registercomponent'}><button type='button' className='btn'>apply now</button></NavLink>
            </div>
    <button className='mobile-menu-icon' onClick={() => setIsmobile(!ismobile)}>
    {ismobile ? < Menu/> :<X/> 
     }
    
</button>
     
    
     
        </div>
        
     
    </>
    
    );
}

 
export default Header;


