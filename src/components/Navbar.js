import React from 'react'
// import { AiOutlineSearch } from "react-icons/ai";
import Description from './Desecription'
import Ending from './Ending';

const link="https://pallav14730.github.io/sign-up-page/"
export default function Navbar() {
    return (
        <>
        <div className="main-nav">
            <div class="topnav">
                <a class="active">dribble</a>
                <a className="Inspiration">Inspiration</a>
                <a className="find-work">Find Work</a>
                <a className="learn-design">Learn Design</a>
                <a className='gopro'>Go Pro</a>
                <a className='design-files'>Design Files</a>
                <a className="hire">Hire Designers</a>
 
                {/* <AiOutlineSearch className='icon' /> */}
               
                <a href={link}>Sign in</a>
                
                
                {/* <button type="button" className='btn2'>Share my Work</button> */}
            </div>
            
        </div>
        <Description />
        <Ending />
        </>
    )
}
