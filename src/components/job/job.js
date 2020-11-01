import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

function Job(props) {
        const {job,auth} = this.props;
        console.log(job);
    const applicant = job.applicants.filter(applicant => {
        return applicant.applicantId === auth.uid
    });
    

        return (
            <div className = "countainer job">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card" style={{padding:'20px', maxWidth:'600px', margin:'auto',marginTop:'50px'}}>
                    <div className="card-body text-center">
                    <h3 className="card-title" > The job is {job.title} </h3>
                <p chassName = "description"> Description: {job.description} </p>
                 <p className= "abilities ">Abilities needed: {job.abilities} </p>
                <p > Job level: {this.jobLevel} </p>
                <p> Status: <span className="text-success">
                    {
                        applicant.length > 0 ? applicant.status : 'Nu ai aplicat inca la acest job'
                    }
                </span> </p>
                {
                    applicant.length === 0 ? <button className="btn btn-success" style={{display:'inherit', marginTop:'10px'}}>Apply</button> : null

                }
                    </div>
                
                    </div>
                </div>
            </div>
          
            </div>

        )    
    }
    const mapStateToProps = (state, ownProps) => {
        // console.log(state);
        const id = ownProps.match.params.id;
        const jobs = state.firestore.data.jobs;
        const job = jobs ? jobs[id] : null
        return {
          job: job,
          auth: state.firebase.auth 
        }
      }
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'jobs' }
    ])
)(Job);
