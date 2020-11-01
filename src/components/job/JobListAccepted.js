import React from 'react'
import JobSummaryAccepted from './JobSummaryAccepted'
export default function JobListAccepted({jobs, uid}) {
let finalJobs = null;
if(jobs){
    const filteredJobs = jobs.filter(job => {
        return job.applicants.filter(applicant => {
            return applicant.applicantId === uid
        }).length !== 0;
    })
    finalJobs = filteredJobs.map(job => {
        return (
            <div className="list-card" key={job.id}>
            <JobSummaryAccepted  job={job} uid={uid} />
            </div>

        )
    })
}
    return (

        <div className="container">
            <div className="row">
            <div className="text-center col-lg-12 border-bottom" style={{marginBottom:'20px'}}><h3 >List of jobs</h3></div>
                <div className="col-lg-12">
                { finalJobs}
                </div>
            </div>
        </div>
    )
}
