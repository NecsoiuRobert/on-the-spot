
export const  createJob = (job) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...job,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then( () => {
            dispatch({type:'CREATE_PROJECT', job});
        }).catch( (err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })

    }
}

export const applyJob = (jobId,userId,applicants) => {
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        const newApplicants = [{
            applicantId:userId,
            status:'Pending'
        },...applicants];
        const firestore = getFirestore();
        firestore.collection('jobs').doc(jobId).set({
            applicants:newApplicants
        },{ merge: true }).then( () => {
            dispatch({type:'APPLY_SUCCESS', jobId});
        }).catch( (err) => {
            dispatch({type: 'APPLY_ERROR', err})
        })
    }
}

