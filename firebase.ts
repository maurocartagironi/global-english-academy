// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDw5vbG7egb_CS9EhxIxfNsjb_O55EePIU",
	authDomain: "global-english-academy.firebaseapp.com",
	projectId: "global-english-academy",
	storageBucket: "global-english-academy.firebasestorage.app",
	messagingSenderId: "205562896781",
	appId: "1:205562896781:web:072c25e12bca69d98a1dc4",
	measurementId: "G-FVRFTWXXEG",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
