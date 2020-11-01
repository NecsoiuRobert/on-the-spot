import React, { Component } from 'react';
import '../../index.css'; 
//import { colorForStatus } from './colorForStatus';
import Jobs from './RecruiterJobList';

class Recruiter extends Component {

    state = {
        id : 1,
        name: 'recruiter' ,
        jobList : [ {  id : 1,  name: 'UnJob' , description: 'desc',  abilities: ['niciuna'] ,   jobLevel : '',  apply: false,   status : 'unapplied' },
        {  id : 1,  name: 'UnJob' , description: 'desc',  abilities: ['niciuna'] ,   jobLevel : '',  apply: false,   status : 'unapplied' }]

        //options: rejected, pending, accepted

    }


    render(){

        return (
            <div className = "recruiter">
                <h1> Your name is  {this.state.name} </h1>
                
            <div className= 'Jobs I posted'>
               <Jobs jobs= {this.state.jobList} />
             </div>

            </div>

        )    
    }
}

export default Recruiter;
