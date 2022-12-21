import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
import CommentModal from "../Home/CommentModal";
import LikeModal from "../Home/LikeModal";
const Post = () => {
  const { user } = useContext(UserInfo);
  const [posts, setPosts] = useState([]);
  const [totalLikes, setTotalLikes] = useState([]);
  // const [refetch, setRefetch] = useState(false);
   const [reFetch, setReFetch] = useState(false);
  const [modal, setModal] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://chitchat-zeta.vercel.app/post/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      
        // console.log(data)
      });
  }, [user, reFetch]);

  const handleLike = (post) => {
    // setLike(!like);

    const milliseconds = new Date().getTime();
    // const likeInfo = {
    //   milliseconds: milliseconds,
    // };
    // const islike = { like: like };
     const likeInfo = {
       post_owner: post.user_name,
       post_owner_email: post.user_email,
       post_owner_Photo: post.user_photo,
       post: post.post,
       post_photo: post.post_photo,
       like_giver_name: user.displayName,
       like_giver_email: user.email,
       like_giver_photo: user.photoURL,
       previous_id: post._id,
       milliseconds: milliseconds,
     };
       fetch(`https://chitchat-zeta.vercel.app/friendPostLike/`, {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(likeInfo),
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.acknowledged === false) {
             // notify("Like allready Done!");
             // setLike(false);
             setReFetch(!reFetch);
           } else {
             // notify("Like Done!");
             // setLike(true);
             setReFetch(!reFetch);
           }
           // console.log(data);
         });

    // fetch(`https://chitchat-zeta.vercel.app/like/${post._id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(islike),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setRefetch(!refetch);
    //   });
  };

const handleModal = (post) => {
  setModal(post);
  fetch(`https://chitchat-zeta.vercel.app/comment/${post?._id}`)
    .then((res) => res.json())
    .then((data) => setComments(data));
};
const handleLikeModal = (likeInfo) => {
  
   setTotalLikes(likeInfo);
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
                <div className="like d-flex gap-2">
                  <button
                    className="btn btn-outline-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#likeModal"
                    onClick={() => handleLikeModal(post.totalLikes)}
                  >
                    {post?.totalLikes?.length}
                  </button>
                  <button className="btn btn-outline-warning">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className={`fs-2 ${
                        post?.ownerLike ? "text-primary" : undefined
                      }`}
                      onClick={() => handleLike(post)}
                    />{" "}
                  </button>
                </div>
                <div className="comments">
                  <button
                    className="btn btn-outline-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#commentModal"
                    onClick={() => handleModal(post)}
                  >
                    <FontAwesomeIcon icon={faComment} className="fs-2" />
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <CommentModal post={modal} comments={comments}></CommentModal>
      <LikeModal likeInfo={totalLikes}></LikeModal>
    </div>
  );
};

export default Post;
