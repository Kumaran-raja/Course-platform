import React from 'react'
import course1 from '../assets/course1.png'
import course2 from '../assets/course2.png'
import course3 from '../assets/course3.png'
import course4 from '../assets/course4.png'
import { IoMdPerson } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
export default function Course() {
    const navigate=useNavigate();
    const pageNavigation=()=>{
        navigate("/Coursedescription")
    }
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Courses</h1>
        <div className='course_container'>
                <div className='course'>
                    <img className='course_img' src={course1} alt="" />
                    <h3 className='course_name'>IAS Weekly Course</h3>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>₹ 8000</h3>
                        <h3>paid</h3>
                    </div>
                    <button>Join Now</button>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:'flex'}}>
                            <IoMdPerson className='icon'/>
                            <p>4590</p>
                        </div>
                        <div style={{display:"block",margin:"auto 0px"}}>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <img className='course_img' src={course2} alt="" />
                    <h3 className='course_name'>IAS Weekly Course (UPSC)</h3>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>₹8000</h3>
                        <h3>paid</h3>
                    </div>
                    <button onClick={pageNavigation}>Join Now</button>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:'flex'}}>
                            <IoMdPerson className='icon'/>
                            <p>590</p>
                        </div>
                        <div style={{display:"block",margin:"auto 0px"}}>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <img className='course_img' src={course3} alt="" />
                    <h3 className='course_name'>TNPSC Group 1 Course</h3>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>₹ 8000</h3>
                        <h3>paid</h3>
                    </div>
                    <button onClick={pageNavigation}>Join Now</button>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:'flex'}}>
                            <IoMdPerson className='icon'/>
                            <p>490</p>
                        </div>
                        <div style={{display:"block",margin:"auto 0px"}}>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <img className='course_img' src={course4} alt="" />
                    <h3 className='course_name'>UPSC Army Course</h3>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>₹ 8000</h3>
                        <h3>paid</h3>
                    </div>
                    <button onClick={pageNavigation}>Join Now</button>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:'flex'}}>
                            <IoMdPerson className='icon'/>
                            <p>4590</p>
                        </div>
                        <div style={{display:"block",margin:"auto 0px"}}>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                </div>
        </div>
        <div className='course_container'>
                <div className='course'>
                    <img className='course_img' src={course1} alt="" />
                    <h3 className='course_name'>IAS Weekly Course</h3>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>₹ 8000</h3>
                        <h3>paid</h3>
                    </div>
                    <button onClick={pageNavigation}>Join Now</button>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:'flex'}}>
                            <IoMdPerson className='icon'/>
                            <p>4590</p>
                        </div>
                        <div style={{display:"block",margin:"auto 0px"}}>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <img className='course_img' src={course2} alt="" />
                    <h3 className='course_name'>IAS Weekly Course (UPSC)</h3>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>₹8000</h3>
                        <h3>paid</h3>
                    </div>
                    <button onClick={pageNavigation}>Join Now</button>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:'flex'}}>
                            <IoMdPerson className='icon'/>
                            <p>590</p>
                        </div>
                        <div style={{display:"block",margin:"auto 0px"}}>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <img className='course_img' src={course3} alt="" />
                    <h3 className='course_name'>TNPSC Group 1 Course</h3>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>₹ 8000</h3>
                        <h3>paid</h3>
                    </div>
                    <button onClick={pageNavigation}>Join Now</button>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:'flex'}}>
                            <IoMdPerson className='icon'/>
                            <p>490</p>
                        </div>
                        <div style={{display:"block",margin:"auto 0px"}}>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <img className='course_img' src={course4} alt="" />
                    <h3 className='course_name'>UPSC Army Course</h3>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h3>₹ 8000</h3>
                        <h3>paid</h3>
                    </div>
                    <button onClick={pageNavigation}>Join Now</button>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:'flex'}}>
                            <IoMdPerson className='icon'/>
                            <p>4590</p>
                        </div>
                        <div style={{display:"block",margin:"auto 0px"}}>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
