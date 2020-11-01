export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then( () => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch( (err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
            const firebase = getFirebase();
            const firestore = getFirestore();
            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then( (resp) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                    email: newUser.email,
                    password: newUser.password,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0],
                    type:newUser.type
                })
            }).then(() => {
                dispatch({type: 'SIGNUP_SUCCESS'})
            }).catch((err) => {
                dispatch({type:'SIGNUP_ERROR', err});
            });
    }
}

export const facialRegister = (label,userId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
            return firestore.collection('users').doc(userId).set({
                faceLabel:Object.assign({},label)
            }, { merge: true }).then(() => {
            dispatch({type: 'REGISTERED_FACE_SUCCESS'})
        }).catch((err) => {
            dispatch({type:'REGISTERED_FACE_FAIL', err});
        });
}
}
