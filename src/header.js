import './style/header.css';
import React, {useState} from 'react';

import {NavLink} from 'react-router-dom';
const Header = () => {
    const [ismobile, setIsmobile] = useState(false);
    const navlinkstyle =({isActive}) =>{
 return{
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration:isActive ? 'underline' : 'none',
    marginTop:isActive ? "10px" : "none"
    
 }
    }
    return (  
        <>
        <div className="main-header">
        <img src="./images/logo.png" alt="" className='header-logo' />
        <div className={ismobile ? "nav-link-mobile" : "nav-link"} onClick={() => setIsmobile(false)} >
           
           <NavLink className='link' style={navlinkstyle} to='/' >home</NavLink>
            <NavLink className='link' style={navlinkstyle} to={'/program'} >the program</NavLink>
            <NavLink className='link' style={navlinkstyle} to={'/about'}>about</NavLink>
            <NavLink className='link' style={navlinkstyle} to={'signpage'}>signUp</NavLink>
            <NavLink className='link' style={navlinkstyle} to={'/loginpage'}>login</NavLink>
            
            <NavLink className='link' style={navlinkstyle} to={'/registercomponent'}><button type='button' className='btn'>apply now</button></NavLink>
            </div>
    <button className='mobile-menu-icon' onClick={() => setIsmobile(!ismobile)}>
    {ismobile ? (
        <i className='fa fa-times'></i>
    ):(
        <i className="fa fa-bars"></i> 
    )}
</button>
      <marquee behavior="" direction="horinzontal"><h1>Welcome To HackYourFuture Institute</h1></marquee>
  
        </div>
        
    
    </>
    
    );
}
 
export default Header;
