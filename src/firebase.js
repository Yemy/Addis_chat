import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXL1MZmV4NEWPMotXJDdD1pYLoD_2Ft3E",
    authDomain: "addis-chat-9e023.firebaseapp.com",
    databaseURL: "https://addis-chat-9e023.firebaseio.com",
    projectId: "addis-chat-9e023",
    storageBucket: "addis-chat-9e023.appspot.com",
    messagingSenderId: "175261435155",
    appId: "1:175261435155:web:aeb408878f93d3bd3506e6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
