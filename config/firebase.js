import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
  measurementId: Constants.manifest?.extra?.firebaseMeasurementId,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const handleSignUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.currentUser);
      const user = userCredential.currentUser;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const handleSignIn = async (email, password) => {
  await signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.currentUser);
      const user = userCredential.user;
    })
    .catch((error) => {
      console.error(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export default app;
