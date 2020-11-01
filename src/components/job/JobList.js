import React from 'react'
import JobSummary from './JobSummary'
export default function JobList({jobs, uid}) {
let finalJobs = null;
if(jobs){
    const filteredJobs = jobs.filter(job => {
        console.log(uid);
        return job.applicants.filter(applicant => {
            return applicant.applicantId === uid
        }).length === 0;
    })
    console.log(filteredJobs);
    finalJobs = filteredJobs.map(job => {
        return (
            <div className="list-card" key={job.id}>
            <JobSummary  job={job} />
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
