import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCvB7TQRvlhS3wc4mDhwNkMBtPWAkb3mbM",
  authDomain: "instagram-2-8122a.firebaseapp.com",
  projectId: "instagram-2-8122a",
  storageBucket: "instagram-2-8122a.appspot.com",
  messagingSenderId: "37628859376",
  appId: "1:37628859376:web:5994d488f01cec40b94335",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
