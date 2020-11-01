export const  createResume = (resume) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('resumes').add({...resume}).then( () => {
            dispatch({type:'ADD_RESUME', resume});
        });

    }
}