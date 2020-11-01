
export const  createJob = (job) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        console.log(job);
        const firestore = getFirestore();
        firestore.collection('jobs').add({
            ...job,
            
        }).then( () => {
            dispatch({type:'CREATE_JOB', job});
        }).catch( (err) => {
            dispatch({type: 'CREATE_JOB_ERROR', err})
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

