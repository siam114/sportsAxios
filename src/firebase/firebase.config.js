// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0NDmaJBkcO-6AG7ugcp8GLuLTGHfkljM",
  authDomain: "sportaxis-project.firebaseapp.com",
  projectId: "sportaxis-project",
  storageBucket: "sportaxis-project.firebasestorage.app",
  messagingSenderId: "244853142906",
  appId: "1:244853142906:web:5ee417ca0e78d7168052c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);