import React, { Component } from 'react'
import { connect } from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom'
class SignIn extends Component {
    state = {
        email: '',
        password:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value, 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);

    }
    render() {
        const { authError,auth} = this.props;
        if(auth.uid) {
            return <Redirect to='/' />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                    <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Password</label>
                                <input type="password" id="password" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
