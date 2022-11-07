import CONST from "../utils/CONST";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: CONST.FIREBASE_API,
  authDomain: CONST.AUTH_DOMAIN,
  projectId: CONST.PROJECT_ID,
  storageBucket: CONST.STORAGE_BUCKET,
  messagingSenderId: CONST.MESSAGEGINGSENDER_ID,
  appId: CONST.APP_ID,
  measurementId: CONST.MEASUREMT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
