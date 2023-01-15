import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDCabIKZy2rIRCmBdjQ5MKZsnaGsN92xeo",
    authDomain: "chat-application-cd23c.firebaseapp.com",
    projectId: "chat-application-cd23c",
    storageBucket: "chat-application-cd23c.appspot.com",
    messagingSenderId: "447896431000",
    appId: "1:447896431000:web:897be0ac79b6057500e3ed"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth();
  export{app , auth}

