import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAppwO1iKPpdvxR4vt88cBRmEfIdTWzGoY",
  authDomain: "addis-chat-70d75.firebaseapp.com",
  projectId: "addis-chat-70d75",
  storageBucket: "addis-chat-70d75.appspot.com",
  messagingSenderId: "856134571292",
  appId: "1:856134571292:web:ea37a16b9824c45b5716d9",
  measurementId: "G-MTEVN8Q0L6"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
