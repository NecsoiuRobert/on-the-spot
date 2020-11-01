import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import JobList from '../job/JobList';
import JobListAccepted from '../job/JobListAccepted';
class Dashboard extends Component {
    render(){
        const {jobs, auth} = this.props;
        // if(!auth.uid) {
        //     return <Redirect to='/signin' />
        // }
        console.log(auth);
        console.log(jobs);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body card-list-container">
                        <JobList jobs={jobs} uid ={auth.uid} />
                        </div>
                    </div>
                        
                    </div>
                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body card-list-container">
                            <JobListAccepted jobs={jobs} uid ={auth.uid} />
                        </div>
                    </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        jobs: state.firestore.ordered.jobs,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'jobs' }
    ])
)(Dashboard);