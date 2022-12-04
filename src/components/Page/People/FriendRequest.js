import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";

const FriendRequest = () => {
  const [data, setData] = useState([]);
  const { user , reFetch, setReFetch } = useContext(UserInfo);

  useEffect(() => {
    fetch(`http://localhost:5000/request/${user.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user,reFetch]);
   
  const reqAccepted = () => {
    console.log('acc')
  }
  const reqDeleted = (req) => {
   

    fetch(`http://localhost:5000/reqDelete/${req._id}`,{
        method: 'DELETE',
        headers: {
            'content-type': "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        setReFetch(!reFetch);
    })
  }
 

  return (
    <div>
      {
        data.length > 0 ? <h2 className="text-center font-color">Friend Requests</h2> : undefined
      }
      {data.map((req) => {
        return (
          <>
            <div className="person d-flex align-items-center gap-2 justify-content-center shadow-lg rounded p-3 bg-body my-2">
              <div
                className="imgwithactive"
                style={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "50%",
                  backgroundImage: `url(${req.sender_photo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
              ></div>
              <div className="text-center">
                <h5>{req.sender_name}</h5>
               <div className="d-flex justify-content-evenly">
               <button className="btn btn-outline-primary" onClick={reqAccepted}>
                  <FontAwesomeIcon
                    icon={faCheck}
                  />
                </button>
                <button className="btn btn-outline-primary" onClick={()=>reqDeleted(req)}>
                  <FontAwesomeIcon
                    icon={faXmark}
                  />
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

export default FriendRequest;
