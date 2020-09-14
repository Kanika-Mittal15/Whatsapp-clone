import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDi1w9U9OoCMV7m4vVJ1yYN8sygUDPReUQ",
  authDomain: "whatsapp-clone-8a940.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-8a940.firebaseio.com",
  projectId: "whatsapp-clone-8a940",
  storageBucket: "whatsapp-clone-8a940.appspot.com",
  messagingSenderId: "196801005474",
  appId: "1:196801005474:web:ccca9015bd385062b1d4fb",
  measurementId: "G-3ENJC7735W",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
