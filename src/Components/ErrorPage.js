import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div style={{textAlign:"center",fontFamily:"sans-serif"}}>
      <p style={{fontSize:"200px",margin:'0',padding:'0'}}>
        404
      </p>
      <p style={{marginBottom:"50px"}}>Oops! Something went wrong. We apologize for the inconvenience. Please try again later.</p>
        <Link to='/' style={{backgroundColor:"black",margin:"15px",padding:"10px",fontSize:"1.5rem",textDecoration:"none",color:"white",borderRadius:"10px"}}>Go To Homepage</Link>
    </div>
  )
}

export default ErrorPage