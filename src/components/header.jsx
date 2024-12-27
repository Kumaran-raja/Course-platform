import React, { useState } from 'react'
import './header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [menuVisible,setMenuVisible]=useState(false);
  const navigate=useNavigate();
  const menuClick=()=>{
    setMenuVisible(!menuVisible)
  }
  const LinkClick=(e,path)=>{
    if (menuVisible) {
      setMenuVisible(!menuVisible)
    } else {
      navigate(path); // Allow navigation
    }
  }
  return (
   
    <div>
       <header>
          <Link className='headermenu' to='/'><li>Home</li></Link>
          <Link className='headermenu' to='/about'> <li >About</li></Link>
          <Link className='headermenu' to='/course'><li >Course</li></Link>
          <Link className='headermenu' to='/exam'> <li>Exam</li></Link>
          <Link className='headermenu' to='/contact'><li>Contact</li></Link>
          <Link style={{textDecoration:"none"}} to='/login'><button>Login</button></Link>
      </header>
      
      <div className='mobile_header'>
        <GiHamburgerMenu className='burgerBtn' onClick={menuClick}/>
      </div>
      <div className='mobile_nav_menu' style={{display:menuVisible?"block" :"none"}}>
          <IoClose style={{position:"absolute",right:"0",width:"40px",height:"40px",marginRight:"10px",marginTop:"10px"}} onClick={menuClick}/>
          <Link style={{marginTop:"60px"}} className='headermenu' to='/' onClick={(e)=>LinkClick(e,"/")}><li>Home</li></Link>
          <Link className='headermenu' to='/about'onClick={(e)=>LinkClick(e,"/about")}> <li >About</li></Link>
          <Link className='headermenu' to='/course'onClick={(e)=>LinkClick(e,"/course")}><li >Course</li></Link>
          <Link className='headermenu' to='/exam' onClick={(e)=>LinkClick(e,"/exam")}> <li>Exam</li></Link>
          <Link className='headermenu' to='/contact'onClick={(e)=>LinkClick(e,"/contact")}><li>Contact</li></Link>
          <Link style={{textDecoration:"none"}} to='/login'onClick={(e)=>LinkClick(e,"/login")}><button>Login</button></Link>
      </div>
    </div>
  )
}
