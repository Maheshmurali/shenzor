import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'



const firebaseConfig = {
    apiKey: "AIzaSyB0HvlPAAvyzeIxaBfixxposkIqyAyL89s",
    authDomain: "fir-demo-f9a7b.firebaseapp.com",
    databaseURL: "https://fir-demo-f9a7b-default-rtdb.firebaseio.com",
    projectId: "fir-demo-f9a7b",
    storageBucket: "fir-demo-f9a7b.appspot.com",
    messagingSenderId: "983954449776",
    appId: "1:983954449776:web:d0eecb6cf4c98c71f51bb5",
    measurementId: "G-L6M7FLY4MF"
  };
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  
  
  export default firebase;