import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Dashboard from './Dashboard'
import RecruiterDashboard from '../recruiter/RecruiterDashboard';
import { Redirect } from 'react-router-dom'
function DecideDashboard(props) {

    const {user, auth} = props;
    if(!auth.uid) {
        return <Redirect to='/onboarding' />
    }
    if(!user) {
        return <Redirect to='/onboarding' />
    }
    console.log(user);
    return (
        <div>
            { user.type === 'recruiter' ? <RecruiterDashboard /> : <Dashboard/>}
        </div>
    )
}
const mapStateToProps = (state) => {
    const users = state.firestore.data.users;
    const user = users ? users[state.firebase.auth.uid] : null;
    return {
        user: user,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(DecideDashboard)