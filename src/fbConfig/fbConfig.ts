import firebase from 'firebase';
import { toast } from '../toast';

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

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
}

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    //Authenticate user and do stuff
    console.log(res);
    return res;
  } catch (error) {
    toast(error.message, 4000);
    return false;
  }
};

export const registerUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  try {
    const res: any = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const syncUser = async (response: any) => {
      const firestore = firebase.firestore();
      await firestore
        .collection('users')
        .doc(response.user.uid)
        .set({
          firstName,
          lastName,
          email,
        });
    };
    syncUser(res)
    return syncUser;
  } catch (error) {
    toast(error.message, 4000);
    return false;
  }
};

export const logoutUser = async () => {
  return firebase.auth().signOut();
};

export default firebase;
