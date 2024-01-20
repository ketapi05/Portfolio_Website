// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN0RVpQgKYo2UYOPLdXEK_YpO_S2MgnxI",
  authDomain: "portfolio-website-79a29.firebaseapp.com",
  projectId: "portfolio-website-79a29",
  storageBucket: "portfolio-website-79a29.appspot.com",
  messagingSenderId: "410100917095",
  appId: "1:410100917095:web:be6d7aeda8e51fe0d305c2",
  measurementId: "G-7BWZ2NR1HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);