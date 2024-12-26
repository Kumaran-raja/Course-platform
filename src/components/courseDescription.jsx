import React from 'react'
import './courseDescription.css'
import couse from '../assets/course1.png'
import { TbWorld } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";

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
                <p>Introduction to UPSC</p>
                <p>1h 30m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Introduction to UPSC</p>
                <p>1h 30m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Introduction to UPSC</p>
                <p>1h 30m 50s</p>
                <button>Start</button>
              </div>
            </div>
            <p style={{padding:"10px 0px"}}>Available for Paid Users Only (Locked)</p>
            <div>
              <div className='list_of_content_item'>
                <p>Introduction to UPSC</p>
                <p>1h 30m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Introduction to UPSC</p>
                <p>1h 30m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Introduction to UPSC</p>
                <p>1h 30m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Introduction to UPSC</p>
                <p>1h 30m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Introduction to UPSC</p>
                <p>1h 30m 50s</p>
                <button>Start</button>
              </div>
              <div className='list_of_content_item'>
                <p>Introduction to UPSC</p>
                <p>1h 30m 50s</p>
                <button>Start</button>
              </div>
            </div>
        </div>
    </div>
  )
}
