import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDVmd75_Y6GczxcQoc88agEsW5wta3QjgQ',
  authDomain: 'speechrecorder-270920.firebaseapp.com',
  databaseURL: 'https://speechrecorder-270920.firebaseio.com',
  projectId: 'speechrecorder-270920',
  storageBucket: 'speechrecorder-270920.appspot.com',
  messagingSenderId: '822671506578',
  appId: '1:822671506578:web:4044d0e32b79c69b073a4b',
  measurementId: 'G-Z12Y8B3BCV'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;
