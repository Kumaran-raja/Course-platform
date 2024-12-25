import React from 'react'
import contactimg from '../assets/contact.png'
import './contact.css'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function contact() {
  return (
    <div className='contact_grid'>
        <div className='img_with_name'>
            <h1 className='contact_content'>Contact Us</h1>
            <img className='contact_img' src={contactimg} alt="" />
        </div>
        <div className='contact_msg_container'>
            <div>
                <label htmlFor="name">Name</label><br />
                <input type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label><br />
                <input type="email" />
            </div>
            <div>
                <label htmlFor="message">Message</label><br />
                <textarea type="text" />
            </div>
            <button>Submit</button>
        </div>
        <div className='contact_address_container'>
            <div className='contact_each_address'>
            <FaHome className='contact_icon'/>
                <div>
                    <h3>Address</h3>
                    <p>86 North st,chennai 600 000</p>
                </div>
            </div>
            <div className='contact_each_address'>
                <FaPhoneAlt className='contact_icon'/>
                <div>
                    <h3>Phone</h3>
                    <p>+91 0000000000</p>
                </div>
            </div>
            <div className='contact_each_address'>
            <MdEmail className='contact_icon'/>
                <div>
                    <h3>Email</h3>
                    <p>exam.official@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}
