// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmwrogVPgYbCokU0ycB5nPTi9P2vt4d_0",
  authDomain: "fir-auth-2c5de.firebaseapp.com",
  projectId: "fir-auth-2c5de",
  storageBucket: "fir-auth-2c5de.appspot.com",
  messagingSenderId: "172846922405",
  appId: "1:172846922405:web:4a45a287170078a8a2ab4c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };