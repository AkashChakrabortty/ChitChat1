import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from "../firebase/firebase.config";
export const UserInfo = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [userId, setUserId] = useState();
    const createUser = (email,password) => {
        return   createUserWithEmailAndPassword(auth, email, password);
    }
    const resetEmail = (email) => {
        return  sendPasswordResetEmail(auth, email)
    }
    const LogIn = (email,password) => {
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUserId(user.uid)
        })
        .catch(() => {
         alert('something wrong!')
        });
    }

    const authInfo = { createUser , LogIn , userId , resetEmail};
    return (
       <UserInfo.Provider value={authInfo}>
        {children}
       </UserInfo.Provider>
    );
};

export default AuthProvider;