import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ResumeContent from './ResumeContent'
import TextToSpeech from '../auth/TextToSpeech'

 function listResume (props) {
     const {auth, user} = props;
     if(user){
        return (
            <div className="container" style={{marginTop:'50px'}}>
                <div className="row">
                <div className="col-lg-12">
                <div className="card" >
                            <div className="card-body">
                                <h3 className="card-title text-success">{user.firstName + ' ' + user.lastName}</h3>
                                <h6 className="card-subtitle mb-2 text-primary">{user.email}</h6>
                                
                                <ResumeContent />
                               
                        </div>
                    </div>
                </div>
                 
                </div>
            </div>
        )
     }else{
         return (<div></div>)
     }
  
}
const mapStateToProps = (state) => {
    // console.log(state);
    const id = state.firebase.auth.uid
    const users = state.firestore.data.users;
    const user = users ? users[id] : null
     return {
         auth:state.firebase.auth,
         user:user,
     }
}

export default compose(
 connect(mapStateToProps),
 firestoreConnect([
     { collection: 'users' },
 ])
)(listResume);
