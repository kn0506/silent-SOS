import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/**
 * firebase サービス
 */
const firebaseConfig = {
  apiKey: "AIzaSyD_1_w_Xoxt0M0HuO1k6tQvSg0_fkQFfH4",
  authDomain: "silent-sos-ba136.firebaseapp.com",
  projectId: "silent-sos-ba136",
  storageBucket: "silent-sos-ba136.firebasestorage.app",
  messagingSenderId: "822141177367",
  appId: "1:822141177367:web:4bacdb84215ecdf7081652",
  measurementId: "G-9FJZKGY0EP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, provider, db, analytics };
