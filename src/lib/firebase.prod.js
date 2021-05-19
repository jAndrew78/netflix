import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// need to seed the database

// need a config
const config = {
    apiKey: "AIzaSyAB-hP1sCBQX9lGgg9jS3Yjj0kPveFuzv0",
    authDomain: "netflix-904f0.firebaseapp.com",
    databaseURL: 'https://netflix-904f0.firebaseio.com',
    projectId: "netflix-904f0",
    storageBucket: "netflix-904f0.appspot.com",
    messagingSenderId: "852318248573",
    appId: "1:852318248573:web:a518084c809b9ebd9cdb14"
};

const firebase = Firebase.initializeApp(config);

export { firebase };
