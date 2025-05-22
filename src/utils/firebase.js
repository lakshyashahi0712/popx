// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDArmxfHXUhhdEWVCrLGVBJFxJRYoV4OhI",
  authDomain: "popx-cf795.firebaseapp.com",
  projectId: "popx-cf795",
  storageBucket: "popx-cf795.appspot.com", // ✅ FIXED HERE
  messagingSenderId: "656831828260",
  appId: "1:656831828260:web:414bc0a3846fb697a863b1",
  measurementId: "G-65LG482JFH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
