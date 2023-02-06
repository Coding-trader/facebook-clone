import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCF8v9O6hMUyT2h3q09BKZKNYiVRbKQB-I",
    authDomain: "facebook-clone-a9c3e.firebaseapp.com",
    projectId: "facebook-clone-a9c3e",
    storageBucket: "facebook-clone-a9c3e.appspot.com",
    messagingSenderId: "990690867342",
    appId: "1:990690867342:web:56bf6523b16546b34c31df",
    measurementId: "G-WPTGVHYKRW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;