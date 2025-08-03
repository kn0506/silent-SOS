import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs7Wl1rj9uJ_zC-WHLaiZ66NOtAhMu8Rc",
  authDomain: "livemate-b6218.firebaseapp.com",
  projectId: "livemate-b6218",
  storageBucket: "livemate-b6218.firebasestorage.app",
  messagingSenderId: "423860807917",
  appId: "1:423860807917:web:1519e2dd9465ec5bf9c4e4",
  measurementId: "G-6E1VY4XBMR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, provider, db, analytics };
