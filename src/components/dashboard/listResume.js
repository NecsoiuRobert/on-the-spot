import React, { Component } from 'react'

 class listResume extends Component {
    
    state= {
        aboutYou: 'about',
        education: 'educatie',
        workExperience: 'munca',
        personalProjects: 'proiecte',
        certifications:'hackaton'
    }
    

    render() {
        return (
            <div >
                <ul>
        
                <header className = "text-center text-light my-10"> 
                        <h1 className="header1 mb-4">Name of the person CV </h1>
                         </header>

                  <li class="list-group"></li>

                  <li class="list-group-item">

                    <h3> Education :</h3>
                    <p> {this.state.education} </p> 
                    <i class="fas fa-check-square"></i>
                    </li>

                    <li class="list-group-item">
                    <h3>WorkExperience : </h3> 
                    <p> {this.state.education} </p> 
                    </li>

                    <li class="list-group-item">
                    <h3>PersonalProjects : </h3> 
                    <p> {this.state.personalProjects} </p> 
                    </li>

                    <li class="list-group-item">
                    <h3>Certifications : </h3> 
                    <p> {this.state.certifications} </p> 
                    </li>
                
                 </ul>
            </div>
        )
    }
}
export default listResume;
