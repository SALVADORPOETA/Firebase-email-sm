// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL2bFcfVloiITQJDKC5OxlgSKJJkE7YPo",
  authDomain: "fir-auth-yt2.firebaseapp.com",
  projectId: "fir-auth-yt2",
  storageBucket: "fir-auth-yt2.appspot.com",
  messagingSenderId: "543541514298",
  appId: "1:543541514298:web:1f1f293b26e3275e7ca503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app