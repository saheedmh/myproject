import './style/header.css';
import {Link} from 'react-router-dom';
const Header = () => {
    return (  
        <>
        <div className="main-header">
        <img src="./images/logo.png" alt="" />
        <div className="navbar">
           <div className='Link' >
           <Link className='link' to='/' >home</Link>
            <Link className='link' to='/program' >the program</Link>
            
            
            
            <Link className='link' to='about'>about</Link>
            
            <select name="" id=""><option value="">for you</option>
            
            <option value="">coaches</option>
            <option value="">students  </option>
            <option value="">support</option>
            </select>
            <button type='button' className='btn'>apply now</button>
        </div>
        </div>
        
    </div>
    </>
    
    );
}
 
export default Header;
