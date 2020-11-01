import React from 'react'

export default function JobSummaryAccepted({job,uid}) {
    console.log(uid);
    return (
        <div className="card">
  <div className="card-body">
    <h5 className="card-title text-primary">{job.companyName}</h5>
    <p className="card-text">{job.title}</p>
    <p>
    Status: <span className="text-success">{job.applicants.filter(applicant => {
            return applicant.applicantId === uid
        })[0].status}</span>
    </p>

  </div>
</div>
    )
}

