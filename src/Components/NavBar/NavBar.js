import React from 'react'
import './NavBar.css'
import Mainlogo from './'

function NavBar() {
    return (
        
            <div className="navbar">
              <img className="logo" src={} alt="NavBar" />
              <div className="navbar-right">
                  <Link to="/" className="right">Home</Link>
                  <Link to="/about" className="right">About</Link>
                  <Link to="/promote" className="right">Promote</Link>

              </div>
            </div>
            
        
    )
}

export default NavBar
