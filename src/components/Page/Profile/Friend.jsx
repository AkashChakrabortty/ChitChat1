import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";

const Friend = () => {
  const { user } = useContext(UserInfo);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/friend/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, [user]);
  return (
    <div>
      {friends.map((friend) => {
        return (
          <>
            <div className="col-6 mx-auto mt-2 d-flex gap-2 justify-content-center shadow-lg rounded p-3 input-bg bg-body">
              <img
                src={friend.friend_photo}
                alt={friend.friend_name}
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                }}
              />
              <div className="content font-color d-flex align-items-center">
                <div className="name">
                  <span>{friend.friend_name}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Friend;
