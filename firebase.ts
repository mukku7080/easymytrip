// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4IS0BD11hKD1ARGf7aDjCs8R0v8zHOWQ",
    authDomain: "travelo-5e920.firebaseapp.com",
    projectId: "travelo-5e920",
    storageBucket: "travelo-5e920.firebasestorage.app",
    messagingSenderId: "578492661478",
    appId: "1:578492661478:web:a7ba5bf706e575a983c527",
    measurementId: "G-XMYWY7X5BN"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth =
    typeof window !== "undefined" ? getAuth(app) : null;

// export const auth = getAuth(app);