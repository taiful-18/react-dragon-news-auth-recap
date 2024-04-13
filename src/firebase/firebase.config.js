// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxjWjNoA71nuygRpA55ce5XY28euAukno",
  authDomain: "react-dragon-news-88444.firebaseapp.com",
  projectId: "react-dragon-news-88444",
  storageBucket: "react-dragon-news-88444.appspot.com",
  messagingSenderId: "728181553397",
  appId: "1:728181553397:web:fbf30fa66e856b8a6aadbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;