import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><NavLink className="nav-link" to ='/' onClick={props.signOut}>Log Out</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to='/' className="btn btn-primary">NN</NavLink></li>
      </ul>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)