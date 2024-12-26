import React from 'react'
import './courseDescription.css'
import couse from '../assets/course1.png'
import { TbWorld } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import profile from '../assets/contact.png'
export default function 
() {
  return (
    <div className='course_description_container'>
        <div className='course_description_grid'>
          <div className='course_description_grid1'>
              <h2>UPSC | TNPSC New batch weekly course</h2>
              <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto autem pariatur excepturi ipsa odio, accusamus quia quam deleniti dicta minus!</p>
            <p>created by <strong>TNacademy</strong></p>
            <div style={{display:"flex"}}>
              <p>Last Updated 10/2024</p>
              <div style={{display:"flex" ,marginLeft:"30px"}}>
                <TbWorld style={{width:"25px",height:"25px"}}/>
                <p><strong>English & Tamil</strong></p>
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
              <p style={{marginBottom:"0px",marginRight:"10px"}}>(4.2)</p>
              <FaRegStar/>
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <p style={{marginBottom:"0px",marginLeft:"10px"}}>(19083 reviews)</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}}>
              <h3 className='free_trial'>Free Trial Available</h3>
              <h3 className='course_description_buy_btn'>Buy Now</h3>
            </div>
          </div>
          <div>
            <img className='course_description_img' src={couse} alt="" />
          </div>
        </div>
        <div className='list_of_content'>
            <h1>List of Contents</h1>
            <p style={{padding:"10px 0px"}}>Free trial</p>
            <div>
              <div className='list_of_content_item'>
                <p>Understanding the UPSC Exam Structure</p>
                <p>0h 4m 34s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Importance of Current Affairs in UPSC</p>
                <p>0h 2m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Effective Time Management for UPSC Preparation</p>
                <p>0h 4m 50s</p>
                <button>Start</button>
              </div>
            </div>
            <p style={{padding:"10px 0px"}}>Available for Paid Users Only (Locked)</p>
            <div>
              <div className='list_of_content_item'>
                <p>Choosing the Right Study Material for UPSC</p>
                <p>0h 24m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>The Role of Mock Tests and Previous Year Papers</p>
                <p>0h 30m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Strategy for General Studies Paper</p>
                <p>1h 45m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Optional Subject Selection and Preparation Tips</p>
                <p>0h 30m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Developing Answer Writing Skills</p>
                <p>1h 35m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Mental and Physical Wellness During UPSC Preparation</p>
                <p>1h 10m 50s</p>
                <button>Start</button>
              </div>
            </div>
        </div>
        <hr />
        <div>
            <h1>Course Reviews</h1>
            <div className='review_container'>
                <div className='review_grid'>
                    <div className='each_review'>
                        <div className='profile_with_rating'>
                            <img className='review_profile' src={profile} alt="" />
                            <div>
                                <h4 style={{margin:"0px"}}>Aarya</h4>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p style={{textAlign:"end",display:"block",margin:"auto 0px"}}>10 day ago</p>
                        </div>
                        <p style={{textAlign:"justify",height:"150px",overflow:"hidden",marginTop:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis ipsa totam porro architecto quisquam reiciendis praesentium laboriosam eveniet blanditiis. Laborum, dolor nostrum. Ullam consectetur fugiat doloremque dicta, magni reiciendis.</p>
                        <div style={{display:"flex"}}>
                            <p style={{margin:"0px"}}>Helpful?</p>
                        
                            <IoMdThumbsUp className='rating_like_icon'/>
                            <IoMdThumbsDown  className='rating_like_icon' />
                        </div>
                    </div>
                    <div className='each_review'>
                        <div className='profile_with_rating'>
                            <img className='review_profile' src={profile} alt="" />
                            <div>
                                <h4 style={{margin:"0px"}}>Vijay</h4>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p style={{textAlign:"end",display:"block",margin:"auto 0px"}}>1 Month ago</p>
                        </div>
                        <p style={{textAlign:"justify",height:"150px",overflow:"hidden",marginTop:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis ipsa totam porro architecto quisquam reiciendis praesentium laboriosam eveniet blanditiis. Laborum, dolor nostrum. Ullam consectetur fugiat doloremque dicta, magni reiciendis.</p>
                        <div style={{display:"flex"}}>
                            <p style={{margin:"0px"}}>Helpful?</p>
                        
                            <IoMdThumbsUp className='rating_like_icon'/>
                            <IoMdThumbsDown  className='rating_like_icon' />
                        </div>
                    </div>
                    <div className='each_review'>
                        <div className='profile_with_rating'>
                            <img className='review_profile' src={profile} alt="" />
                            <div>
                                <h4 style={{margin:"0px"}}>Antony</h4>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p style={{textAlign:"end",display:"block",margin:"auto 0px"}}>20 day ago</p>
                        </div>
                        <p style={{textAlign:"justify",height:"150px",overflow:"hidden",marginTop:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis ipsa totam porro architecto quisquam reiciendis praesentium laboriosam eveniet blanditiis. Laborum, dolor nostrum. Ullam consectetur fugiat doloremque dicta, magni reiciendis.</p>
                        <div style={{display:"flex"}}>
                            <p style={{margin:"0px"}}>Helpful?</p>
                        
                            <IoMdThumbsUp className='rating_like_icon'/>
                            <IoMdThumbsDown  className='rating_like_icon' />
                        </div>
                    </div>
                    <div className='each_review'>
                        <div className='profile_with_rating'>
                            <img className='review_profile' src={profile} alt="" />
                            <div>
                                <h4 style={{margin:"0px"}}>Meera</h4>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p style={{textAlign:"end",display:"block",margin:"auto 0px"}}>2 day ago</p>
                        </div>
                        <p style={{textAlign:"justify",height:"150px",overflow:"hidden",marginTop:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis ipsa totam porro architecto quisquam reiciendis praesentium laboriosam eveniet blanditiis. Laborum, dolor nostrum. Ullam consectetur fugiat doloremque dicta, magni reiciendis.</p>
                        <div style={{display:"flex"}}>
                            <p style={{margin:"0px"}}>Helpful?</p>
                        
                            <IoMdThumbsUp className='rating_like_icon'/>
                            <IoMdThumbsDown  className='rating_like_icon' />
                        </div>
                    </div>
                    <div className='each_review'>
                        <div className='profile_with_rating'>
                            <img className='review_profile' src={profile} alt="" />
                            <div>
                                <h4 style={{margin:"0px"}}>Vikram</h4>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p style={{textAlign:"end",display:"block",margin:"auto 0px"}}>4 day ago</p>
                        </div>
                        <p style={{textAlign:"justify",height:"150px",overflow:"hidden",marginTop:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis ipsa totam porro architecto quisquam reiciendis praesentium laboriosam eveniet blanditiis. Laborum, dolor nostrum. Ullam consectetur fugiat doloremque dicta, magni reiciendis.</p>
                        <div style={{display:"flex"}}>
                            <p style={{margin:"0px"}}>Helpful?</p>
                        
                            <IoMdThumbsUp className='rating_like_icon'/>
                            <IoMdThumbsDown  className='rating_like_icon' />
                        </div>
                    </div>
                    <div className='each_review'>
                        <div className='profile_with_rating'>
                            <img className='review_profile' src={profile} alt="" />
                            <div>
                                <h4 style={{margin:"0px"}}>Aanand</h4>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p style={{textAlign:"end",display:"block",margin:"auto 0px"}}>10 month ago</p>
                        </div>
                        <p style={{textAlign:"justify",height:"150px",overflow:"hidden",marginTop:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis ipsa totam porro architecto quisquam reiciendis praesentium laboriosam eveniet blanditiis. Laborum, dolor nostrum. Ullam consectetur fugiat doloremque dicta, magni reiciendis.</p>
                        <div style={{display:"flex"}}>
                            <p style={{margin:"0px"}}>Helpful?</p>
                        
                            <IoMdThumbsUp className='rating_like_icon'/>
                            <IoMdThumbsDown  className='rating_like_icon' />
                        </div>
                    </div>
                    <div className='each_review'>
                        <div className='profile_with_rating'>
                            <img className='review_profile' src={profile} alt="" />
                            <div>
                                <h4 style={{margin:"0px"}}>Rahul</h4>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p style={{textAlign:"end",display:"block",margin:"auto 0px"}}>1 year ago</p>
                        </div>
                        <p style={{textAlign:"justify",height:"150px",overflow:"hidden",marginTop:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis ipsa totam porro architecto quisquam reiciendis praesentium laboriosam eveniet blanditiis. Laborum, dolor nostrum. Ullam consectetur fugiat doloremque dicta, magni reiciendis.</p>
                        <div style={{display:"flex"}}>
                            <p style={{margin:"0px"}}>Helpful?</p>
                        
                            <IoMdThumbsUp className='rating_like_icon'/>
                            <IoMdThumbsDown  className='rating_like_icon' />
                        </div>
                    </div>
                    <div className='each_review'>
                        <div className='profile_with_rating'>
                            <img className='review_profile' src={profile} alt="" />
                            <div>
                                <h4 style={{margin:"0px"}}>Vivek</h4>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p style={{textAlign:"end",display:"block",margin:"auto 0px"}}>1 day ago</p>
                        </div>
                        <p style={{textAlign:"justify",height:"150px",overflow:"hidden",marginTop:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis ipsa totam porro architecto quisquam reiciendis praesentium laboriosam eveniet blanditiis. Laborum, dolor nostrum. Ullam consectetur fugiat doloremque dicta, magni reiciendis.</p>
                        <div style={{display:"flex"}}>
                            <p style={{margin:"0px"}}>Helpful?</p>
                        
                            <IoMdThumbsUp className='rating_like_icon'/>
                            <IoMdThumbsDown  className='rating_like_icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button style={{backgroundColor:"#003566",color:"white",padding:"10px 30px",display:"block",margin:"auto",borderRadius:"30px"}}>More</button>
    </div>
  )
}
