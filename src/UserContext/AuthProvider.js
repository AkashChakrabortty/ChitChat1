import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
export const UserInfo = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [userId, setUserId] = useState();
    const [email, setEmail] = useState();
    const [user,setUser] =  useState();
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     const user = userCredential.user;
        //     setUserId(user.uid)
        //   })
        //   .catch(() => {
        //    alert('create new account failed!')
        //   });
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
    
    const updateUser = (displayName, photoURL) => {
      updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      })
        .then(() => {})
        .catch((error) => {
          alert("something wrong");
        });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // console.log(user);
            setEmail(user.email);
            setUserId(user.uid);
            setUser(user)
          } else {
            // console.log("else onAuthStateChanged");
            setUserId();
            setUser()
          }
        });
      }, []);
    const authInfo = {  user ,createUser , LogIn , userId , resetEmail , logout , email, updateUser , setUserId};
    return (
       <UserInfo.Provider value={authInfo}>
        {children}
       </UserInfo.Provider>
    );
};

export default AuthProvider;