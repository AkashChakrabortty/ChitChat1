import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import io from "socket.io-client";
import { UserInfo } from "../../../UserContext/AuthProvider";
const socket = io.connect("https://chitchat-zeta.vercel.app/");
const Active = () => {
  // const {socket} = useState(UserInfo)
  // console.log(socket)
  const { user } = useContext(UserInfo);
  const [activeFriends, setactiveFriends] = useState([]);
  // const handlesubmit = () => {
  //   socket.emit('reactEvent',test)
  // }
 
  // socket.on("message", (message) => {
  //   console.log(message);
  // });

//  useEffect(() => {
//    socket.emit("activeFriends", user.email);
//    socket.on("message", (message) => {
//      setactiveFriends(message);
     
//    });
//  }, [user, socket, activeFriends]);
  
  return (
    <div className="col-6 mx-auto mt-4">
      <div className="person d-flex align-items-center gap-2 justify-content-center shadow-lg rounded p-3 bg-body">
        <div
          className="imgwithactive"
          style={{
            height: "50px",
            width: "50px",
            backgroundImage:
              "url(https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <FontAwesomeIcon
            icon={faCircle}
            style={{
              color: "lime",
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          />
        </div>
        <span>Akash Chakrabortty</span>
     
      </div>
    </div>
  );
};

export default Active;
