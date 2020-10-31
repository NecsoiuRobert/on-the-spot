import React, { Component } from 'react'


export default class addResume extends Component {
    state= {
        fullName:null,
        address:null,
        birthDate:null,
        education: null,
        workExperience: null,
        personalProjects: null,
        certifications:null
    }

    handleChange = e =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
    }
    render() {
        return (
            
            <div className="d-flex justify-content-center">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="FullName">Fullame</label>
                <br/>
                <input type="text" id="fullName" onChange={this.handleChange}/>
                <br/>
                <label htmlFor="address">address</label>
                <br/>
                <input type="text" id="address" onChange={this.handleChange}/>
                <br/>
                <label htmlFor="birthDate">birthDate</label>
                <br/>
                <input type="text" id="birthDate" onChange={this.handleChange}/>
                <br/>
                <label htmlFor="education">education</label>
                <br/>
                <textarea id="education" onChange={this.handleChange}></textarea>
                <br/>
                <label htmlFor="workExperience">experience</label>
                <br/>
                <textarea id="workExperience" onChange={this.handleChange}></textarea>
                <br/>
                <label htmlFor="personalProjects">projects</label>
                <br/>
                <textarea id="personalProjects" onChange={this.handleChange}></textarea>
                <br/>
                <label htmlFor="certifications">certifications</label>
                <br/>
                <textarea id="certifications" onChange={this.handleChange}></textarea>
                <br/>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}
