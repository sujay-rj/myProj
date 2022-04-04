import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQpffjhrrXHloo4cj6umMQkHAEXa_osZ4",
    authDomain: "thylinked.firebaseapp.com",
    projectId: "thylinked",
    storageBucket: "thylinked.appspot.com",
    messagingSenderId: "787539786504",
    appId: "1:787539786504:web:e038e0005ce0ccc88f8abd",
    measurementId: "G-PLKH0WX4BV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// import firebase from '@firebase/app';
// require('firebase/auth');