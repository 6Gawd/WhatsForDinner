import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD6vA7rr68uDCsGdIwoKMj6QPflFDK_deE',
  authDomain: 'whatsfordinner-a595e.firebaseapp.com',
  databaseURL: 'https://whatsfordinner-a595e.firebaseio.com',
  projectId: 'whatsfordinner-a595e',
  storageBucket: 'whatsfordinner-a595e.appspot.com',
  messagingSenderId: '236985381389',
  appId: '1:236985381389:web:f554fef55a4350face5b44',
  measurementId: 'G-VRG26JJQWZ'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    //Authenticate user and do stuff
    console.log(res);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default firebase;
