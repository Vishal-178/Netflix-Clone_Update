import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// env protect to upload secret key to github
import env from "../env";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.apiId,
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
