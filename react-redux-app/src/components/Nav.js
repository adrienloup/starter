import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav">
      <div>
      <Link exact="true" to="/">My&nbsp;App</Link>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)
