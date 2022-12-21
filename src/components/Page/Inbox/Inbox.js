import { faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import io from "socket.io-client";
import { UserInfo } from "../../../UserContext/AuthProvider";
const socket = io.connect("https://chitchat-zeta.vercel.app/");
const Inbox = () => {
    const location = useLocation();
    const id = location.pathname.split(":")[1];
    // console.log(id)
    const [friendInfo,setFriendInfo] = useState([]);
    const {user} = useContext(UserInfo)
    const [reFetch,setRefetch]= useState(true)
    const [room, setRoom] = useState('');
    const [chat, setChat] = useState([]);
     useEffect(() => {
       fetch(`https://chitchat-zeta.vercel.app/single_friend/${id}`)
         .then((res) => res.json())
         .then((data) => {
           if (user.email === data.friend_email) {
             let emailSwap;
             emailSwap = data.user_email;
             data.user_email = data.friend_email;
             data.friend_email = emailSwap;

             let nameSwap;
             nameSwap = data.user_name;
             data.user_name = data.friend_name;
             data.friend_name = nameSwap;

             let photoSwap;
             photoSwap = data.user_photo;
             data.user_photo = data.friend_photo;
             data.friend_photo = photoSwap;
           }
           // console.log(data)
           setFriendInfo(data);
           setRoom(data._id);
         });
     }, [user]);
     
     const handleSubmit = (event)=> {
       event.preventDefault();
       const text = event.target.text.value;
       const milliseconds = new Date().getTime();
       console.log("handleSubmit");
       const chatInfo = {
         milliseconds: milliseconds,
         text: text,
         sender_name: user.displayName,
         sender_photo: user.photoURL,
         sender_email: user.email,
         receiver_name: friendInfo.friend_name,
         receiver_photo: friendInfo.friend_photo,
         receiver_email: friendInfo.friend_email,
         room: friendInfo._id,
       };
       //  console.log(text)
       //  let socket = io();
       //  socket.emit("chat", chatInfo);

       //insert db
       fetch("https://chitchat-zeta.vercel.app/chatstore", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(chatInfo),
       })
         .then((res) => res.json())
         .then((data) => {
           event.target.reset();
           setRefetch(!reFetch)
         });
     }
//  console.log(room);
       useEffect(() => {
         fetch(`https://chitchat-zeta.vercel.app/getChat/${room}`)
           .then((res) => res.json())
           .then((data) => {
            //  console.log(data);
             //  setFriendInfo(data);
             //  setRoom(data._id);
             setChat(data);
           });
       }, [reFetch, user]);
//    console.log(room);
    //  socket.on(`akash`, (info) => {
    //    console.log(info.text);
    //  });
   
      // console.log(friendInfo);
      const handleRefresh = () => {
         console.log('refresh');
      setRefetch(!reFetch);
      }
    return (
      <div className="d-flex  align-items-center" style={{ height: "100vh" }}>
        <div
          className="col-8 border border-warning mx-auto rounded"
          style={{ overflowY: "auto", height: "90vh" }}
        >
          <div className="header d-flex justify-content-between align-items-center p-2 font-color">
            <div className="img">
              <img
                src={friendInfo.friend_photo}
                alt={friendInfo.friend_name}
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              />
            </div>
            <div className="name">
              <span>{friendInfo.friend_name}</span>
            </div>
            <div className="icon d-flex gap-2">
              <span
                className="border border-warning border-2 p-1"
                style={{ borderRadius: "50%" }}
              >
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span
                className="border border-warning border-2 p-1"
                style={{ borderRadius: "50%" }}
              >
                <FontAwesomeIcon icon={faVideo} />
              </span>
            </div>
          </div>
          <hr className="text-warning col-11 mx-auto" />
          {
            <div className="chat-container">
              {chat?.map((e) => {
                return (
                  <div className="d-flex my-2"> 
                    <div className="img ms-2">
                      <img
                        src={e.sender_photo}
                        alt={e.sender_name}
                        style={{
                          height: "40px",
                          width: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className="text d-flex align-items-center ms-2">
                      <span className="font-color">{e.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          }
          <hr className="text-warning col-11 mx-auto" />
          <div className="sent d-flex justify-content-end">
            <div className="form-floating col-6 text-end">
              <form onSubmit={handleSubmit}>
                <textarea
                  className="form-control input-bg bg-body font-color"
                  id="floatingTextarea2"
                  placeholder="Write here....."
                  style={{ height: "20vh" }}
                  name="text"
                ></textarea>
                <span
                  className="btn btn-outline-warning mt-2 me-2"
                  onClick={handleRefresh}
                >
                  Refresh
                </span>
                <button className="btn btn-outline-warning mt-2" type="submit">
                  Sent
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Inbox;