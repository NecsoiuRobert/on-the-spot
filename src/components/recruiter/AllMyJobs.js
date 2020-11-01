import React from 'react'

const allMyJobs = ({jobs}) =>
{
  
    const jobsList = jobs.length ? (
        jobs.map( job => {
            return (<div >
                <ul>
                    <li class="list-group-item">
                    <h3> Function :</h3>
                    <p> {job.name} </p> 
                    </li>

                    <li class="list-group-item">
                    <h3>Description : </h3> 
                    <p> {job.description} </p> 
                    </li>

                    <li class="list-group-item">
                    <h3> Abilities: </h3> 
                    <p> {job.abilities} </p> 
                    </li>
                
                 </ul>
            </div> )
        }) 
    ):( 
     <p className="center"> You haven't posted any jobs</p> 
    )
    return (
            <div className="container">
                <h1>Here are the JOBS you posted: </h1> 
                {jobsList}
            </div>
    )
}

export default allMyJobs;
