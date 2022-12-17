import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserInfo } from "../../../UserContext/AuthProvider";

const ChatInbox = () => {
   const { user} = useContext(UserInfo);
   const [friends, setFriends] = useState([]);
 
   useEffect(() => {
     fetch(`http://localhost:5000/friend/${user?.email}`)
       .then((res) => res.json())
       .then((data) => setFriends(data));
   }, [user]);
  //  console.log(friends)
  return (
    <div>
      {
        friends.map((friend)=>{
          return (
            <>
              <Link to={`friend:${friend.friend_email}`} className='text-decoration-none'>
                <div className="col-6 mx-auto mt-2 d-flex gap-2 justify-content-center shadow-lg rounded p-3 bg-body input-bg bg-body">
                  <img
                    src={friend.friend_photo}
                    alt={friend.friend_name}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="content d-flex align-items-center">
                    <div className="name">
                      <span className="font-color">{friend.friend_name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })
      }
    </div>
  );
};

export default ChatInbox;
