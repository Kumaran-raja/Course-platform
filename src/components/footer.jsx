import React from 'react'
import './footer.css'
export default function footer() {
  return (
    <footer>
      <div className='footer_container'>
      <div>
          <h3>Getting started</h3>
          <li><a href="#">Login / Register</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">All Courses</a></li>
          <li><a href="#">Online Test</a></li>
          <li><a href="#">Live Classes</a></li>
        </div>
        <div>
          <h3>Competitive Exams</h3>
          <li><a href="#">UPSC Preparation</a></li>
          <li><a href="#">Group 1</a></li>
          <li><a href="#">Group 2 & 2A</a></li>
          <li><a href="#">Group 4</a></li>
        </div>
        <div>
          <h3>Exam Resource</h3>
          <li><a href="#">Study Plan</a></li>
          <li><a href="#">Previous Year Qus</a></li>
          <li><a href="#">Syllabus</a></li>
          <li><a href="#">Hall Tickets</a></li>
          <li><a href="#">Answer Keys</a></li>
          <li><a href="#">Exams & Eligibility</a></li>
        </div>
        <div>
          <h3>Support</h3>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy & Policy</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Return & Refund Policy</a></li>
        </div>
      </div>
       <p className='copy'>&copy; 2024 Exams. All rights reserved</p>
    </footer>
  )
}
