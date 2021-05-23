import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGOxxqAGTjMxoDTeM-BIl_P3RK2_SBxpU",
    authDomain: "twitter-clone-bcf9f.firebaseapp.com",
    databaseURL: "https://twitter-clone-bcf9f-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-bcf9f",
    storageBucket: "twitter-clone-bcf9f.appspot.com",
    messagingSenderId: "243361121027",
    appId: "1:243361121027:web:f7a7f73bbbc7ff47ea9f36",
    measurementId: "G-XX4FN2R2SY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;