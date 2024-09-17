import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBKVe4sfVBgSgzjufKBL3YOBR6mkcsnBEY",
    authDomain: "interview-project-5ea29.firebaseapp.com",
    projectId: "interview-project-5ea29",
    storageBucket: "interview-project-5ea29.appspot.com",
    messagingSenderId: "305685748040",
    appId: "1:305685748040:web:8ed2c10d8fbb171d98bb7d"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export default app;
