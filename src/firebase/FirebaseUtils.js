import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD61CAOqUivWZMjZE38ZNHWNWPEqm0OrDQ",
    authDomain: "crown-brand-db.firebaseapp.com",
    databaseURL: "https://crown-brand-db.firebaseio.com",
    projectId: "crown-brand-db",
    storageBucket: "",
    messagingSenderId: "500098886742",
    appId: "1:500098886742:web:4658dfeb2d38c747"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;