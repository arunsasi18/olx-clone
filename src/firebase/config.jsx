import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase-firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnZulpi2wjdsTpwv_8IISD6wvaYgOFxp0",
    authDomain: "olx-clone-6b9aa.firebaseapp.com",
    projectId: "olx-clone-6b9aa",
    storageBucket: "olx-clone-6b9aa.appspot.com",
    messagingSenderId: "1064848206284",
    appId: "1:1064848206284:web:0722117230bb4741fdd569",
    measurementId: "G-MGWKNZWN09"
  };

  export default firebase.initializeApp(firebaseConfig)