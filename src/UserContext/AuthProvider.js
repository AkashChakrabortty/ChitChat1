import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
export const UserInfo = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [userId, setUserId] = useState();
    const createUser = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUserId(user.uid)
          })
          .catch(() => {
           alert('create new account failed!')
          });
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
         alert('login failed!')
        });
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // console.log(user);
         
            setUserId(user.uid);
          
          } else {
            // console.log("else onAuthStateChanged");
          }
        });
      }, []);
    const authInfo = { createUser , LogIn , userId , resetEmail};
    return (
       <UserInfo.Provider value={authInfo}>
        {children}
       </UserInfo.Provider>
    );
};

export default AuthProvider;