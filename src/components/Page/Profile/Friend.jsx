import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserInfo } from "../../../UserContext/AuthProvider";

const Friend = () => {
  const { user, reFetch, setReFetch } = useContext(UserInfo);
  const [friends, setFriends] = useState([]);
  const notify = (value) => toast(value);
  useEffect(() => {
    fetch(`http://localhost:5000/friend/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, [user, reFetch]);

  const friendDeleted = (req) => {
    fetch(`http://localhost:5000/friendDeleted/${req._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReFetch(!reFetch);
        notify("One friend Deleted");
      });
  };
  return (
    <div>
      {friends.map((friend) => {
        return (
          <>
            <div className="col-6 mx-auto mt-2 d-flex gap-2 justify-content-center shadow-lg rounded p-3 input-bg bg-body">
              <div className="img-div d-flex align-items-center">
                <img
                  src={friend.friend_photo}
                  alt={friend.friend_name}
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="content font-color d-flex align-items-center">
                <div className="name text-center">
                  <p>{friend.friend_name}</p>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => friendDeleted(friend)}
                  >
                    Delete
                  </button>
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
