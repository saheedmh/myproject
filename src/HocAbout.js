import React from 'react'
import { NavLink} from 'react-router-dom'
function HocAbout(props ) {
  return (
    <div>
      <nav className='nav-wrapper red-darken-3'>
<div className="container">
    <ul>
        <li><NavLink className to>about</NavLink></li>
        <li><NavLink className>contact</NavLink></li>
    </ul>
</div>
      </nav>
    </div>
  )
}

export default HocAbout