import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
export default function Applicants({applicantId,status}) {
    console.log(applicantId);
    return (
             <div className="container">
            <p>Aplicant Id : {applicantId}</p>
            <p>Aplicant status: {status}</p>
            {status === 'Pending' ? <a className="btn btn-primary" style={{marginBottom:'50px'}}>Approve</a> : null}
        </div>
       
    )
}
    