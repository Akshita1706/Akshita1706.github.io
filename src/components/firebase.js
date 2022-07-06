import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1vkzE0sprrwUBaSeWy_JMwnUMH-853Yw",
  authDomain: "banking-c53c6.firebaseapp.com",
  projectId: "banking-c53c6",
  storageBucket: "banking-c53c6.appspot.com",
  messagingSenderId: "826741128106",
  appId: "1:826741128106:web:356caad025f1c4cb6849d3",
  measurementId: "G-04ESCRWHLL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
