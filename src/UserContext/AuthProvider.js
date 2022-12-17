import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";
import app from "../firebase/firebase.config";
const socket = io.connect("http://localhost:5000/");
export const UserInfo = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [userId, setUserId] = useState();
  const [email, setEmail] = useState();
  const [user, setUser] = useState();
  const [reFetch, setReFetch] = useState(false);
  const [loader, setLoader] = useState(false);
  // const [startIndex, setStartIndex] = useState(0);
  const [startIndexLikes, setStartIndexLikes] = useState(0);
  const [startIndexHomePost, setStartIndexHomePost] = useState(0);
  const [startIndexOwnPost, setStartIndexOwnPost] = useState(0);
  const [startIndexComments, setStartIndexComments] = useState(0);
  const [startIndexChitchatUsers, setStartIndexChitchatUsers] = useState(0);
  const [startIndexFriendReq, setStartIndexFriendReq] = useState(0);
  const [startIndexFriend, setStartIndexFriend] = useState(0);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    //     const user = userCredential.user;
    //     setUserId(user.uid)
    //   })
    //   .catch(() => {
    //    alert('create new account failed!')
    //   });
  };
  const resetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const LogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserId(user.uid);

        // socket.on('active',()=> {
        //   console.log('active client')
        // })

      })
      .catch(() => {
        alert("login failed!");
      });
  };
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
        setUser(user);
      } else {
        // console.log("else onAuthStateChanged");
        setUserId();
        setUser();
      }
    });
  }, [reFetch]);
  const authInfo = {
    user,
    createUser,
    LogIn,
    userId,
    resetEmail,
    logout,
    email,
    updateUser,
    setUserId,
    reFetch,
    setReFetch,
    loader,
    setLoader,
    startIndexLikes,
    setStartIndexLikes,
    startIndexHomePost,
    setStartIndexHomePost,
    startIndexOwnPost,
    setStartIndexOwnPost,
    startIndexComments,
    setStartIndexComments,
    startIndexChitchatUsers,
    setStartIndexChitchatUsers,
    startIndexFriendReq,
    setStartIndexFriendReq,
    startIndexFriend,
    setStartIndexFriend,
    socket,
  };
  return <UserInfo.Provider value={authInfo}>{children}</UserInfo.Provider>;
};

export default AuthProvider;
