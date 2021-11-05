import  firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeE7WhvcYJ4r8zTkxQGmKRRzYN4RPYMiA",
  authDomain: "web-store-1-b6564.firebaseapp.com",
  projectId: "web-store-1-b6564",
  storageBucket: "web-store-1-b6564.appspot.com",
  messagingSenderId: "789305483240",
  appId: "1:789305483240:web:5f255386032a4904724e5d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;