import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

 function ResumeContent(props) {
     const {auth,resumes} = props;
     console.log(resumes);
     if(resumes){
         const resumeList = [...resumes];
         const resume = resumeList.filter(resume1 => {
             return resume1.userId === auth.uid;
         })[0];
         return (
             <div>
            <h6 className="card-subtitle mb-2 text-muted">{resume.address}</h6>
            <ul className="list-group">
            <li className="list-group-item"><span><b>About yourself: </b></span>{resume.about}</li>
            <li className="list-group-item"><span><b>Education: </b></span>{resume.education}</li>
            <li className="list-group-item"><span><b>Experience: </b></span>{resume.experience}</li>
            <li className="list-group-item"><span><b>Certifications: </b></span>{resume.certifications}</li>
            </ul>
             </div>
  
        )
     }else {
         return ( <div></div>)
     }

}

const mapStateToProps = (state) => {
    // console.log(state);
    const id = state.firebase.auth.uid
    const resumes = state.firestore.ordered.resumes;
 
     return {
         auth:state.firebase.auth,
         resumes:resumes,
     }
}

export default compose(
 connect(mapStateToProps),
 firestoreConnect([
     { collection: 'resumes'}
 ])
)(ResumeContent)