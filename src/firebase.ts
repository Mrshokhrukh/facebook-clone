// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBW1P7Fq7yPfMRFtUe_NOwabgE0OUVuqA",
  authDomain: "facebook-clone-ef8ca.firebaseapp.com",
  projectId: "facebook-clone-ef8ca",
  storageBucket: "facebook-clone-ef8ca.appspot.com",
  messagingSenderId: "562002586732",
  appId: "1:562002586732:web:7b8a75583409a77938bc49",
  measurementId: "G-E8V6EN3NH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
// const db = getDatabase();
const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select_account ",
// });
// const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export { auth, provider };
export default db;
