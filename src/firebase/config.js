import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAYVr9uuAJ3rDzedIUdwhG0ec0TrLSRvfY",
    authDomain: "cooking-ninja-site-ab949.firebaseapp.com",
    projectId: "cooking-ninja-site-ab949",
    storageBucket: "cooking-ninja-site-ab949.appspot.com",
    messagingSenderId: "567912092405",
    appId: "1:567912092405:web:477f4391b30f5ac7a96bbc"
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init services
const projectFirestore = firebase.firestore();

export {projectFirestore};