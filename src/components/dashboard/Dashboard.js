import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
    render(){
        const {projects, auth} = this.props;
        if(!auth.uid) {
            return <Redirect to='/signin' />
        }
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col-lg-12">bau</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);