// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Alllows React to connect to firebase Auth
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const KEY = process.env.REACT_APP_KEY;

const firebaseConfig = {
  apiKey: "KEY",
  authDomain: "note-it-authentication.firebaseapp.com",
  projectId: "note-it-authentication",
  storageBucket: "note-it-authentication.appspot.com",
  messagingSenderId: "708722678451",
  appId: "1:708722678451:web:12ec4bf9bfc1defa0c2ec6",
  measurementId: "G-7E7N6WEV8T",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // app.auth();
// Todo: USE for CRUD later
// const db = app.firestore();

export { app, auth, 
  // db
 };
