import React from 'react'
import { Link } from 'react-router-dom'
import Applicants from './Applicants.js'
export default function JobSummaryRecruiter({job}) {
    console.log("asdasdad",job);
    console.log(job.applicants);
    return (
        <div className="col-lg-12">
        <div className="card list-card">
            <div className="card-body">
                <h4 className="card-title">{job.title}</h4>
                <p className="card-text">{job.description}</p>
               
            </div>
            <div className="card-footer">
            { job.applicants.length !== 0 ? job.applicants.map( applicant => {
                    console.log(applicant);
                    return ( <Applicants applicantId = {applicant.applicantId} status={applicant.status} key={applicant.applicantId} />)
                }) : null }
            </div>
    </div>
        </div>

    )
}
