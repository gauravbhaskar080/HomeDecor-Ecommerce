
import React from 'react'

import "../stylesheets/footer.css"
import contact from "../Pictures/contact-book.png"
import phone from "../Pictures/phone.png"
import location from "../Pictures/location.png"
import envelope from "../Pictures/envelope.png"

const footer = () => {
  return (
    <div className="footer">
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
            <div className='sb__footer-links_div image'>
                <img src="https://images.unsplash.com/photo-1698536946858-98d37fc2ef0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNxdWFyZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
                <div className='sb__footer-links_div'>
                    <a href="/velvethomes/showprodcat/64a5955d9b3dc77cbe74db29"><h4>Furniture</h4></a>
                    
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e888">
                        <p>Beds</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e88a">
                        <p>Tables</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e88c">
                        <p>Chairs</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e88e">
                        <p>Almirah</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e890">
                        <p>Dining Tables</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e892">
                        <p>Cabinets</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e894">
                        <p>Sofa</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e896">
                        <p>Shoe Storage</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                <a href="/velvethomes/showprodcat/64a594174f6b05e6fe5a5545"><h4>Tiles</h4></a>
                    <a href="/velvethomes/showallprodsubcat/64aa6f8dd283a64a518cbefa">
                        <p>Living Room Wall Tiles</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d373f89f953e9b1e879">
                        <p>Living Room Floor Tiles</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e880">
                        <p>Bathroom Wall Tiles</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e882">
                        <p>Bathroom Floor Tiles</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3c3f89f953e9b1e87e">
                        <p>Bed Room Wall Tiles</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3c3f89f953e9b1e87c">
                        <p>Bed Room Floor Tiles</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e884">
                        <p>Kitchen Wall Tiles</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3d3f89f953e9b1e886">
                        <p>Kitchen Floor Tiles</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                <a href="/velvethomes/showprodcat/64a5960c7b9dea400786c055"><h4>Sanitary</h4></a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e898">
                        <p>Showers</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e89a">
                        <p>Taps</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e89c">
                        <p>Bath Tubs</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e89e">
                        <p>Wash Basins</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e8a0">
                        <p>Urinals</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e8a2">
                        <p>Tiolets</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3e3f89f953e9b1e8a4">
                        <p>Bath Accessories</p>
                    </a>
                    <a href="/velvethomes/showallprodsubcat/64aa7d3f3f89f953e9b1e8a6">
                        <p>Kitchen Sink</p>
                    </a>
                    
                </div>
                
                <div className='sb__footer-links_div mehul1'>
                <h4>About Us</h4>
                   <div className="mehul">
                   <img className='icon' src={contact} alt="" />
                        <p>Contact Us</p>
                    </div> 
                   <div className="mehul">
                   <img className='icon' src={location} alt="" />
                        <p>Address: Delhi</p>
                    </div> 
                   <div className="mehul">
                   <img className='icon' src={phone} alt="" />
                        <p>Phone Number: 12346789</p>
                    </div> 
                   <div className="mehul">
                   <img className='icon' src={envelope} alt="" />
                        <p>Email: vhome@g.com</p>
                    </div> 
                     
                </div>
                

            </div>

            <hr></hr>

            <div className= "sb__footer-below">
                <div className='sb__footer-copyright'>
                <p>
                    @{new Date().getFullYear()} VelvetHomes All right reserved
                </p>
                </div>
                <div className='sb__footer-below-links'>
                    <a href=""><div><p>Terms & Conditions</p></div></a>
                    <a href=""><div><p>Privacy</p></div></a>
                    <a href=""><div><p>Security</p></div></a>
                    <a href=""><div><p>Cookie Declaration</p></div></a>
                 

            </div>
            </div>
            
        </div>

    </div>
  )
}

export default footer
