// import * as firebase from 'firebase';

import { initializeApp } from 'firebase/app';

import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';


// import 'firebase/compat/firestore';
import { fbOpts } from './config/fbConfig';

const firebaseConfig = {
  apiKey: fbOpts.FB_API_KEY,
  authDomain: fbOpts.FB_AUTH_DOMAIN,
  projectId: fbOpts.FB_PROJECT_ID,
  storageBucket: fbOpts.FB_STORAGE_BUCKET,
  messagingSenderId: fbOpts.FB_MESSAGING_SENDER_ID,
  appId: fbOpts.FB_APP_ID,
  measurementId: fbOpts.FB_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
const storage = getStorage();
export const storageRef = ref(storage);

export default firebaseApp;
