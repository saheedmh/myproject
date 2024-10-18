//import './styles/heading.css';

import {NavLink} from 'react-router-dom';

const Navlink =() =>{

    const navlinkstyle = ()=>{

    }
return(
    <div className='w-1/3' >
           <NavLink className='links' style={navlinkstyle} to={'/'} >home</NavLink>
            <NavLink className='links' style={navlinkstyle} to={'/program'} >about</NavLink>
            <NavLink className='links' style={navlinkstyle} to={'/about'}>blog</NavLink>
  </div>
)

}




const navs =() =>{
    return(
        <div className='w-1/3'>
        <div className="flex justify-between">
<NavLink/>
        </div>
        </div>
    )
}

export default navs;