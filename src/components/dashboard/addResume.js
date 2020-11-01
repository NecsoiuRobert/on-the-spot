import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {createResume} from '../../store/actions/resumeActions'
class addResume extends Component {
    state= {
        address:null,
        education: null,
        experience: null,
        about: null,
        certifications:null
    }

    handleChange = e =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        const resume = {
            ...this.state,
            userId: this.props.auth.uid
        }
        this.props.createResume(resume);
    }
    render() {

        return (
            
            <div className="container" style={{marginTop:'50px'}}>
            <div className="row">
                <div className="col-lg-8">
                        <form onSubmit={this.handleSubmit} style={{padding:'50px'}}>
                        <h3 className="card-title text-center border-bottom" style={{marginBottom:'50px'}}> Add your resume</h3>
                            <div className="form-group">
                                <label htmlFor="about">Tell us more about yourself</label>
                                <textarea className="form-control" id="about" onChange={this.handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Tell us more about your address</label>
                                <textarea className="form-control" id="address" onChange={this.handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="education">Tell us more about your education</label>
                                <textarea className="form-control" id="education" onChange={this.handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="experience">Tell us more about your experience</label>
                                <textarea className="form-control" id="experience" onChange={this.handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="certifications">Tell us more about your certifications</label>
                                <textarea className="form-control" id="certifications" onChange={this.handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        auth: state.firebase.auth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createResume : (resume) => dispatch(createResume(resume))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(addResume);