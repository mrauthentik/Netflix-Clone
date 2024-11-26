import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBfO6qRHzgOAivbRD16Pxufrcan2hPa8k4",
  authDomain: "netflix-clone-372aa.firebaseapp.com",
  projectId: "netflix-clone-372aa",
  storageBucket: "netflix-clone-372aa.firebasestorage.app",
  messagingSenderId: "463848293281",
  appId: "1:463848293281:web:e6fcc029bf4f84eff581e0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
//User SignUp function
const signup = async (name, email, password)=>{
     try {
       const res = await createUserWithEmailAndPassword(auth, email, password)
        const user= res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error)
        alert(error)
     }
}

const login = async (email, password)=>{
    try {
      await  signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, signOut}