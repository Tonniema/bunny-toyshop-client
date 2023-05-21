//eslint-disable-next-line
import React, { createContext, useEffect, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut , GoogleAuthProvider ,signInWithPopup, GithubAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const Goog_leAuth_Provider = new GoogleAuthProvider();
const Github_Auth_Provider = new GithubAuthProvider();


const AuthProviders = ( {children}) => {
    const [user , setuser] = useState(null)
    const [loading , setloading] = useState(true)

    const Create_User = (email , passward) => {
        setloading(true)
        return createUserWithEmailAndPassword (auth ,email, passward )
     }

    const User_Login = (email , passward) => {
        setloading(true)
        return signInWithEmailAndPassword (auth ,email, passward )
     }
    const Google_Login = () => {
        return signInWithPopup(auth, Goog_leAuth_Provider)
     }
    const Github_Login = () => {
        return signInWithPopup(auth, Github_Auth_Provider)
     }
    const Forget_Password = (reset_email) => {
        return sendPasswordResetEmail(auth, reset_email)
     }
    
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (current_user) => {
            setuser(current_user)
            setloading(false)
            return () => {
                unsubscribe();
            }
          });
    },[])

    const Log_Out = () => {
        return signOut(auth)
    }
    const Auth_Info = {
        user,
        loading,
        Create_User,
        User_Login,
        Log_Out,
        Google_Login,
        Github_Login,
        Forget_Password
       }
    return (
        <AuthContext.Provider value={Auth_Info}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProviders;