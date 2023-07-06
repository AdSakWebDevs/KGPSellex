// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMM56fnkSA1P5p4b6plQso_3001MpEEYI",
  authDomain: "kgpsellex.firebaseapp.com",
  projectId: "kgpsellex",
  storageBucket: "kgpsellex.appspot.com",
  messagingSenderId: "750261842834",
  appId: "1:750261842834:web:309fb0919f637e0932074b",
  measurementId: "G-ZTC4HQ2M0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);