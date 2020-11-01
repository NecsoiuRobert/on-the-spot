import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {createJob} from '../../store/actions/jobActions'

class addJob extends Component {

    state = {
        title : null,
        description : null,
        jobLevel : null,
        ability: '',
        disabilitiesString: '',
    }

    handleChange = (e) =>
    {
        this.setState ({
            [e.target.id] : e.target.value
        })
      //  console.log(this.state);

    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
     
        const abilitatiSeparate = this.state.ability.split(',');
        const disabilities = this.state.disabilitiesString.split(',');
        console.log(abilitatiSeparate);
      

        this.props.createJob({
            title:this.state.title,
            description: this.state.description,
            jobLevel: this.state.jobLevel,
            disabilities : disabilities,
            abilities : abilitatiSeparate,
            recruiterId: this.props.auth.uid,
            applicants: []
           })

       
    }

    
    render(){

        return (
            <div className="container mt-4" >
                 <header className = "text-center text-light my-4"> 
                        <h1 className="header1 mb-4">ADD JOB </h1>
                         </header>

                <form onSubmit = {this.handleSubmit} >
                    <div className = "form-group row text-light my-4">
                        <label htmlFor="title" > Position:  </label>
                        <input type="text" id="title" onChange={this.handleChange} className= "form-control"  />
                    </div>
               
                
                    <div className = "form-group row">
                        <label htmlFor="description"> Description:</label>
                        <input type="text" id="description" onChange={this.handleChange} className= "form-control" />
                    </div>

                    <div className = "form-group row">
                        <label htmlFor="jobLevel" > Experience needed:</label>
                        <input type="text" id="jobLevel" onChange={this.handleChange} className= "form-control" />
                    </div>
                   
                    <div className = "form-group row">
                        <label htmlFor="ability" > Add an ability required:</label>
                        <input type="text" id = "ability" onChange={this.handleChange} className= "form-control" /> 
                    </div>
                    <div className = "form-group row">
                        <label htmlFor="disabilitiesString" > Add the type of disabilities: </label>
                        <input type="text" id = "disabilitiesString" onChange={this.handleChange} className= "form-control" /> 
                    </div>
                    
                    <button className="btn btn-primary button1"> Done </button>
                </form>
               
            </div>

            

        )    
    }
}
const mapDispatchToProsp = (dispatch) => {
    return {
        createJob : (job) => dispatch(createJob(job))
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps,mapDispatchToProsp)( addJob);
