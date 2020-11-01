import React from 'react'

const allResumes = ({resumes}) =>
{
    const resumesList = resumes.length ? (
        resumes.map( resume => {
            return (<div >
                <ul>
        
                <header className = "text-center text-light my-10"> 
                        <h1 className="header1 mb-4">Name of the person CV </h1>
                         </header>

                     <li class="list-group-item">
                    <h3> Education :</h3>
                    <p> {resume.education} </p> 
                    </li>

                    <li class="list-group-item">
                    <h3>WorkExperience : </h3> 
                    <p> {resume.experience} </p> 
                    </li>

                    <li class="list-group-item">
                    <h3>PersonalProjects : </h3> 
                    <p> {resume.personalProjects} </p> 
                    </li>

                    <li class="list-group-item">
                    <h3>Certifications : </h3> 
                    <p> {resume.certifications} </p> 
                    </li>
                
                 </ul>
            </div> )
        }) 
    ):( 
     <p className="center"> There are no applicants</p> 
    )
    return (
            <div className="container">
                <h1>Here are the CVs: </h1> 
                {resumesList}
            </div>
    )
}

export default allResumes
