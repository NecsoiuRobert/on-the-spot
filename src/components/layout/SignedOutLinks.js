import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';    
const SignedOutLinks = () =>{
    return (
       <ul className="navbar-nav ml-auto text-center">
           <li className="nav-item" style={{paddingTop:'7px'}}><NavLink className="nav-link" to='/signin' >Login</NavLink></li>
           <li className="nav-item" style={{marginLeft:'15px'}}><NavLink className="nav-link" to='/signup/recruiter' key={"recruiter"}><span className="btn btn-primary">I am a recruiter</span></NavLink></li>
       </ul>
    )
}

export default SignedOutLinks;