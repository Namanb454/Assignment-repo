// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBMSJzkBZRzX6UWxSN9ibaUbv0ycVt5pmA",
    authDomain: "assignment-961c6.firebaseapp.com",
    projectId: "assignment-961c6",
    storageBucket: "assignment-961c6.appspot.com",
    messagingSenderId: "612909263966",
    appId: "1:612909263966:web:9eb2b10944ffdf58d058cf",
    measurementId: "G-93S9PCVW80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider };