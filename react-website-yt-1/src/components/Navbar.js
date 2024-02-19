import React, {useState} from 'react'

function Navbar() {
  return (
    <>
      <nav className="navbar"></nav>
        <div className="navbar-container">
            <Link to="/" className='navbar-logo'>
                TRVL
            </Link>
        </div>
    </>
  )
}

export default Navbar


