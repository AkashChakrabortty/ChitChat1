import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserInfo } from "../../../UserContext/AuthProvider";
import FriendRequest from "./FriendRequest";

const People = () => {
  const [peoples, setPeoples] = useState([]);
  const { user } = useContext(UserInfo);
  const [loader, setLoader] = useState(true);
  const notify = (value) => toast(value);
  useEffect(() => {
    fetch("https://chitchat-zeta.vercel.app/peoples")
      .then((res) => res.json())
    .then((data) => {
      setPeoples(data)
      setLoader(false)
    });
  }, []);
  const addFriend = (people) => {
    const milliseconds = new Date().getTime();
    const reqInfo = {
      sender_email: user.email,
      sender_photo: user.photoURL,
      sender_name: user.displayName,
      receiver_name: people.name,
      receiver_email: people.email,
      receiver_photo: people.photoUrl,
      milliseconds: milliseconds,
    };

    fetch("https://chitchat-zeta.vercel.app/addFriend", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reqInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        data.acknowledged
          ? notify("Request send!")
          : notify("Request already sent!");
      });
  };

  return (
    <div className="col-6 mx-auto mt-4">
      <FriendRequest></FriendRequest>
      <hr />
      <h2 className="text-center font-color">ChitChat Users</h2>
      <hr />
      {loader ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {peoples.map((people) => {
            return (
              <>
                {people.email === user.email ? undefined : (
                  <div className="person d-flex align-items-center gap-2 justify-content-center shadow-lg rounded p-3 bg-body my-2 input-bg bg-body font-color">
                    <div
                      className="imgwithactive"
                      style={{
                        height: "60px",
                        width: "60px",
                        borderRadius: "50%",
                        backgroundImage: `url(${people.photoUrl})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        position: "relative",
                      }}
                    ></div>
                    <div className="text-center">
                      <h5>{people.name}</h5>
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => addFriend(people)}
                      >
                        Add Friend
                      </button>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default People;
