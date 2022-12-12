import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
const Post = () => {
  const { user } = useContext(UserInfo);
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(false);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/post/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [user, refetch]);

  const handleLike = (post) => {
    setLike(!like);

    const milliseconds = new Date().getTime();
    const likeInfo = {
      milliseconds: milliseconds,
    };
    const islike = { like: like };

    fetch(`http://localhost:5000/like/${post._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(islike),
    })
      .then((res) => res.json())
      .then((data) => {
        setRefetch(!refetch);
      });
  };

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
              <p>{new Date(post.milliseconds).toUTCString()}</p>
              <p className="fs-4">{post.post}</p>
              <div>
                <img
                  src={post.post_photo}
                  alt={post.post}
                  className="img-fluid"
                />
              </div>
              <div className="d-flex justify-content-evenly mt-2">
                <div className="like">
                  <button className="btn btn-outline-warning">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className={`fs-2 ${
                        post.ownerLike ? "text-primary" : undefined
                      }`}
                      onClick={() => handleLike(post)}
                    />
                  </button>
                </div>
                <div className="comments">
                  <FontAwesomeIcon icon={faComment} className="fs-2" />
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
