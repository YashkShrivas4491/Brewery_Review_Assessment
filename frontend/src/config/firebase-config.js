import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { config } from 'dotenv';

// config(); // Load environment variables from .env file

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyB1KTzHPw2cGYS0UdtelKfLFIh6Xthf7xA",
  authDomain: "backend-429b9.firebaseapp.com",
  projectId: "backend-429b9",
  storageBucket: "backend-429b9.appspot.com",
  messagingSenderId: "629957842109",
  appId: "1:629957842109:web:821f8958b33e24928013d4",
  measurementId: "G-FVYFKG0Y0R",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
// const auth = getAuth(app);
// export { app, auth };
