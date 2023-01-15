import React from 'react'



const Navbar = () => {
  return (
    <div className='navbar'>
      <span  className='logo' >Chat</span>
      <div className='user'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLOHTR8auSCLmACmtpwBCkUBtgbeIF8NpF7NSNT4IjoQ&s" alt="" />
        <span>Antony</span>
        <button>logout</button>
      </div>
      
    </div>
  )
}

export default Navbar