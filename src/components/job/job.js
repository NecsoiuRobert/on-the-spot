import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import '../../index.css'; 
//import { colorForStatus } from './colorForStatus';

class job extends Component {

    state = {
        id : 1,
        name: '' ,
        description: '',
        abilities: [] , 
        jobLevel : '',
        apply: false,  
        status : 'unapplied' 
        //options: rejected, pending, accepted

    }


    render(){

        return (
            <div className = "countainer job">
                <h1> The job is {this.state.name} </h1>
                <div chassName = "description"> Description: {this.state.description} </div>
                 <div className= "abilities ">Abilities needed: {this.state.abilities} </div>
                <div > Job level: {this.state.jobLevel} </div>
                <div> Status: {this.state.status} </div>

            </div>

        )    
    }
}

export default job;
