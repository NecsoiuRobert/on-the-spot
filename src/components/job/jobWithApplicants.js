import React, { Component } from 'react';
import Resumes from './allResumes.js';

class jobWithApplicants extends Component {

    state = {
        id : 1,
        name: 'JavaScript Developer' ,
        description: '',
        abilities: [] , 
        jobLevel : 'Entry',
        apply: false,  
        status : 'unapplied', 
        //options: rejected, pending, accepted

        //about the job part

        //list of Resumes
        resumes:
         [
        { aboutYou: 'Student',  education: 'HS',  workExperience: '--', personalProjects: 'proiecte', certifications:'fdsf' } , 
        { aboutYou: 'CEO',  education: '',  workExperience: 'dsf', personalProjects: 'fsd', certifications:'fds' } 
         ] 
    }


    render(){
        return (
            <div className = "countainer job">
                <h1> The job is {this.state.name} </h1>
                <div chassName = "description"> Description: {this.state.description} </div>
                 <div className= "abilities ">Abilities needed: {this.state.abilities} </div>
                <div > Job level: {this.state.jobLevel} </div>
                <div> Status: {this.state.status} </div>

                <div className= 'Job'>
                   <Resumes resumes= {this.state.resumes} />
                </div>

            </div>

        )    
    }
}

export default jobWithApplicants;
