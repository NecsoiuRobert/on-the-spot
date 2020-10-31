import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyC8oz6OLaVa3YcyJDa2D-xEco7jJujjYJM",
  authDomain: "hackathon-asmi.firebaseapp.com",
  databaseURL: "https://hackathon-asmi.firebaseio.com",
  projectId: "hackathon-asmi",
  storageBucket: "hackathon-asmi.appspot.com",
  messagingSenderId: "459030345000",
  appId: "1:459030345000:web:59e8a5f4b8c69e14e30c1d",
  measurementId: "G-JN5CBGP8FX"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;