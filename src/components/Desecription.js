import React from 'react'
import Cards from './Cards';

export default function Desecription() {
    return (
        <>
            <div className='Description'>
                <input type="text" placeholder="Search.." className='search' />
                <div className='landing'>
                    <h1>Landing Page</h1>
                    <p className='p1'>A landing page is generally considered a specific page designed to receive and convert traffic</p>
                    <p className='p2'>from an online marketing campaign but could also serve as the first introduction to a company</p>
                    <p className='p3'>or product.</p>
                </div>
                <div className='links'>
                    <p>Related:</p>
                </div>
                <div className='Links'>
                    <a>HomePage</a>
                    <a>Landing</a>
                    <a>Website</a>
                    <a>landingpage</a>
                    <a>webdesign</a>
                    <a>homepage</a>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">Popular</button>
                    <div class="dropdown-content">
                        <a href="#">Popular</a>
                        <a href="#">New & Noteworthy</a>
                        <a href="#">Marketplace</a>
                    </div>

                </div>
                <div className='links123'>
                    <a className='Discover'>Discover</a>
                    <a className='animation'>Animation</a>
                    <a className='branding'>Branding</a>
                    <a className='illus'>Illustration</a>
                    <a className='mobile'>Mobile</a>
                    <a className='print'>Print</a>
                    <a className='product'>Product Design</a>
                    <a className='web'>Web Design</a>
                    <a></a>
                   
                </div>
            <Cards />
                
            
            </div>
            
        </>
    )
}
