import React from 'react'

function Header() {
  return (
    <nav className='top-menu'>
    <div className='title-wrapper'>
      <span className='menu-title'>Pomodoro Timer</span>
    </div>
    <div>
      <button>Report</button>
      <button>Setting</button>
      <button>Login</button>
    </div>
  </nav>
  )
}

export default Header