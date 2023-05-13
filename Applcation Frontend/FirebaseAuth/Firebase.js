// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyCsa-P2BURYxnbRxcqdbuAZ5nj_p9EXO0s",
      authDomain: "be-smart-reactnative-app.firebaseapp.com",
      projectId: "be-smart-reactnative-app",
      storageBucket: "be-smart-reactnative-app.appspot.com",
      messagingSenderId: "250914787248",
      appId: "1:250914787248:web:ba9242ed1f58448e6a1075"
    };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };