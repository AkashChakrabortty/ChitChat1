import { faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const Inbox = () => {
    const location = useLocation();
    const email = location.pathname.split(":")[1];
    const [friendInfo,setFriendInfo] = useState([]);
     useEffect(() => {
       fetch(`http://localhost:5000/friend/${email}`)
         .then((res) => res.json())
         .then((data) => setFriendInfo(data));
     }, []);
     console.log(friendInfo)
     
    return (
      <div className="d-flex  align-items-center" style={{ height: "100vh" }}>
        <div
          className="col-8 border border-warning mx-auto rounded"
          style={{ overflowY: "auto", height: "90vh" }}
        >
          <div className="header d-flex justify-content-between align-items-center p-2 font-color">
            <div className="img">
              <img
                src={friendInfo[0]?.friend_photo}
                alt={friendInfo[0]?.friend_name}
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              />
            </div>
            <div className="name">
              <span>{friendInfo[0]?.friend_name}</span>
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

          <div className="sent d-flex justify-content-end">
            <div class="form-floating col-6 text-end">
              <textarea
                className="form-control input-bg bg-body font-color"
                id="floatingTextarea2"
                style={{ height: "20vh" }}
              ></textarea>
              <label for="floatingTextarea2">Write here.....</label>
              <button className="btn btn-outline-warning mt-2">Sent</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Inbox;