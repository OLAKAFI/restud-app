// New imports
import { initializeApp } from "firebase/app";


import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";





// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvtxA3a6BTb-NVeGzPo8PurBLa9Qn5pBo",
  authDomain: "restud-36159.firebaseapp.com",
  projectId: "restud-36159",
  storageBucket: "restud-36159.appspot.com",
  messagingSenderId: "567473848382",
  appId: "1:567473848382:web:92f83f34391cdbd169116f",
  measurementId: "G-FTWG47HR9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();



// Sign in with Google
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Login

const logInWithEmailAndPassword = async (name, email, password) => {
  
  try {
    const res = await signInWithEmailAndPassword(auth, name, email, password);
    alert("You've logged in successfuly");
 
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

  } catch (err) {
    console.error(err);
    alert("The email or password is incorrect, please try again");
  }

    
};


// Register
async function registerWithEmailAndPassword(name, email, password) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration Successful");

    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    
  } catch (err) {
    console.error(err);
    alert("The email already has an account");
  }
}

// Password Reset
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Log out
const logout = () => {
  signOut(auth);
};


// New exports
export {
  auth,
  db,
  signInWithGoogle,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
