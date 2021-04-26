import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2bxKYAVT_FKAwqojc777cA0I0pGtWvro",
  authDomain: "disneyplus-a9bbf.firebaseapp.com",
  projectId: "disneyplus-a9bbf",
  storageBucket: "disneyplus-a9bbf.appspot.com",
  messagingSenderId: "629602802257",
  appId: "1:629602802257:web:63aef5370806d6e273b670",
  measurementId: "G-WTCPJ10H57",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
