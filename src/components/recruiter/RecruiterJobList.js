import React from 'react'
import JobSummaryRecruiter from './JobSummaryRecruiter'
export default function RecruiterJobList({jobs, uid}) {
let finalJobs = null;
if(jobs){
    console.log("adadadsdas",jobs);
    const filteredJobs = jobs.filter(job => {
        console.log(uid);
        return job.recruiterId === uid;
    })
    console.log("asdads",filteredJobs);
    finalJobs = filteredJobs.map(job => {
        return (
            <div className="list-card" key={job.id}>
            <JobSummaryRecruiter job={job} />
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
