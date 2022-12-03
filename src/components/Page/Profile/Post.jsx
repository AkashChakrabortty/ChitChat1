import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
const Post = () => {
  const { user } = useContext(UserInfo);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/post/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [user]);
  return (
    <div className="container mt-2">
      {posts?.map((post) => {
        return (
          <>
            <div className="shadow-lg rounded p-3 bg-body border col-sm-10 mx-auto input-bg font-color">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                }}
              />
              <p>2.44AM(22NOV,2020)</p>
              <p className="fs-4">{post.post}</p>
              <div>
                <img
                  src={post.post_photo}
                  alt={post.post}
                  className="img-fluid"
                />
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="like">
                  <FontAwesomeIcon icon={faThumbsUp} className="fs-2" /> (100)
                </div>
                <div className="comments">
                  <FontAwesomeIcon icon={faComment} className="fs-2" />
                  (100)
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Post;
