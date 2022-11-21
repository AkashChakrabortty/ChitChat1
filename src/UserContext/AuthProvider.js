import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
export const UserInfo = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [userId, setUserId] = useState();
    const [email, setEmail] = useState();
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
    const logout = () => {
      return signOut(auth);
    };
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // console.log(user);
            setEmail(user.email);
            setUserId(user.uid);
          
          } else {
            // console.log("else onAuthStateChanged");
            setUserId();
          }
        });
      }, []);
    const authInfo = { createUser , LogIn , userId , resetEmail , logout , email};
    return (
       <UserInfo.Provider value={authInfo}>
        {children}
       </UserInfo.Provider>
    );
};

export default AuthProvider;