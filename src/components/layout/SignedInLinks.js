import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><NavLink className="nav-link" to='/regface' className="btn btn-success" style={{marginRight:'20px'}}>Register your face</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/listResume' className="btn btn-primary" style={{marginRight:'20px'}}>Your Profile</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/resume'>Complete your resume</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/add-job'>Add job</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to ='/' onClick={props.signOut}>Log Out</NavLink></li>
      </ul>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)