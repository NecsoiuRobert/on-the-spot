import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {signUp} from '../../store/actions/authActions'
class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value, 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.id);
        const signupState = {
            ...this.state,
            type:this.props.id
        }
        this.props.signUp(signupState);

    }
    render() {
        const {auth, authError,id} = this.props;
        console.log(id);
        if(auth.uid) {
            return <Redirect to='/' />
        }
        return (
             <div className="container" style={{marginTop:'50px'}}>
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                    <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">LastName</label>
                                <input type="text" id="lastName" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstName">firstName</label>
                                <input type="text" id="firstName" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <p>{ authError ? <p>{authError}</p> : null};</p>
                            <button type="submit" className="btn btn-primary">Register</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.id;
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        id: id
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
