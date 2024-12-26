import React ,{useState,useEffect} from 'react'
import './home.css'
import women from '../assets/study women.png'
import course1 from '../assets/course1.png'
import course2 from '../assets/course2.png'
import course3 from '../assets/course3.png'
import course4 from '../assets/course4.png'
import { IoMdPerson } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate();
    const pageNavigation=()=>{
        navigate("/Coursedescription")
    }
    const [counts, setCounts] = useState({
        academyYears: 0,
        currentSelection: 0,
        liveStudents: 0,
        satisfiedStudents: 0,
    });

    const targetCounts = {
        academyYears: 10,
        currentSelection: 40,
        liveStudents: 120,
        satisfiedStudents: 90,
    };

    useEffect(() => {
        const incrementCount = (key, target) => {
            let currentCount = 0;
            const interval = setInterval(() => {
                if (currentCount < target) {
                    currentCount++;
                    setCounts((prev) => ({ ...prev, [key]: currentCount }));
                } else {
                    clearInterval(interval);
                }
            }, 10); // Adjust the interval for speed of animation
        };

        incrementCount('academyYears', targetCounts.academyYears);
        incrementCount('currentSelection', targetCounts.currentSelection);
        incrementCount('liveStudents', targetCounts.liveStudents);
        incrementCount('satisfiedStudents', targetCounts.satisfiedStudents);
    }, []);
  return (
    <div>
        <div className='home_grid1'>
            <div className='home_grid1_content' >
                <h2>UPSC | TNPSC EXAM</h2>
                <h3>Join Now</h3>
                <p>Group 1,Group 2,Group 2A,Group 4, VAO</p>
                <p>Preparation in English & Tamil</p>
                <h2>Course | Exam</h2>
                <button >Admission</button>
            </div>
            <img className='womenimg' src={women}/>
        </div>
        
        <div className='grade'>
            <h2 style={{textAlign:"center"}}>#1 Ranked Online TNPSC | IPSC Academy</h2>
            <div className='grade_grid'>
            <div>
                    <h1>{counts.academyYears} +</h1>
                    <p>Years Online Academy</p>
                </div>
                <div>
                    <h1>{counts.currentSelection} +</h1>
                    <p>Current Selection (24 -25)</p>
                </div>
                <div>
                    <h1>{counts.liveStudents} +</h1>
                    <p>Active LIVE Students</p>
                </div>
                <div>
                    <h1>{counts.satisfiedStudents} +</h1>
                    <p>Satisfied Students</p>
                </div>

            </div>
        </div>
        <div className='offer_grid'>
            <div className='offers'>
                <h2>Group 1</h2>
                <p>Course + Notes</p>
                <h1>₹ 3000</h1>
                <p>Video Class</p>
                <p>60 Tests</p>
                <p>All Subjects</p>
                <p>English & Tamil</p>
                <p>Weekly LIVE Discussion</p>
                <button onClick={pageNavigation}>Join Now</button>
            </div>
            <div style={{backgroundColor:"orangered",color:"white"}} className='offers'>
                <h2>UPSC</h2>
                <p>Course + Notes</p>
                <h1>₹ 12000</h1>
                <p>Video Class</p>
                <p>60 Tests</p>
                <p>All Subjects</p>
                <p>English & Tamil</p>
                <p>Weekly LIVE Discussion</p>
                <button onClick={pageNavigation}>Join Now</button>
            </div>
            <div style={{backgroundColor:"yellow"}} className='offers'>
                <h2>Group 2</h2>
                <p>Course + Notes</p>
                <h1>₹ 5000</h1>
                <p>Video Class</p>
                <p>60 Tests</p>
                <p>All Subjects</p>
                <p>English & Tamil</p>
                <p>Weekly LIVE Discussion</p>
                <button onClick={pageNavigation}>Join Now</button>
            </div>
            <div style={{backgroundColor:"pink"}} className='offers'>
                <h2>Group 4</h2>
                <p>Course + Notes</p>
                <h1>₹ 7500</h1>
                <p>Video Class</p>
                <p>60 Tests</p>
                <p>All Subjects</p>
                <p>English & Tamil</p>
                <p>Weekly LIVE Discussion</p>
                <button onClick={pageNavigation}>Join Now</button>
            </div>
        </div>
        <div>
            <h1 style={{textAlign:"center"}}>Trending Courses</h1>
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
    </div>
  )
};
