import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// need to see the database

// need a config
const config = {};

const firebase = Firebase.initializeApp(config);

export { firebase };
