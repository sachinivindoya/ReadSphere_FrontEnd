// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk2U7OCSW0aL4Ge2xNP6l08sik2AwGvUY",
  authDomain: "readsphere-380e4.firebaseapp.com",
  projectId: "readsphere-380e4",
  storageBucket: "readsphere-380e4.appspot.com",
  messagingSenderId: "245535068279",
  appId: "1:245535068279:web:be448ff4a2f701f337f672",
  measurementId: "G-6DFYL0J33D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// @ts-ignore
const analytics :any = getAnalytics(app);