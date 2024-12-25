import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
export default function header() {
  return (
    <header>
        <Link className='headermenu' to='/'><li>Home</li></Link>
        <Link className='headermenu' to='/about'> <li >About</li></Link>
        <Link className='headermenu' to='/course'><li >Course</li></Link>
        <Link className='headermenu' to='/exam'> <li>Exam</li></Link>
        <Link className='headermenu' to='/contact'><li>Contact</li></Link>
        
        <Link style={{textDecoration:"none"}} to='/login'><button>Login</button></Link>
    </header>
  )
}
