import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
import Pagenation from "../../Pagenation/Pagenation";
import Post from "../../Post/Post";
import CommentModal from "./CommentModal";
import LikeModal from "./LikeModal";

const Home = () => {
  const {
    user,
    reFetch,
    setReFetch,
    startIndexHomePost,
  } = useContext(UserInfo);
  const [posts, setPosts] = useState();
  const [totalPosts, setTotalPosts] = useState();
  const [loader, setLoader] = useState(true);

  const [ modal , setModal] = useState({});
  const [comments, setComments] = useState([]);
  const [totalLikes,setTotalLikes] = useState([]);
 
  useEffect(() => {
    fetch(
      `https://chitchat-zeta.vercel.app/friendsPost/${user?.email}?startIndex=${startIndexHomePost}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.filterLimitArray);
        setTotalPosts(data.total);
         setLoader(false);
      });
  }, [user, reFetch]);
  

  const handleLike = (post) => {

    const milliseconds = new Date().getTime();
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
      
          setReFetch(!reFetch);
        } else {
         
          setReFetch(!reFetch);
        }
        
      });
  };
  
 
  const handleModal = (post) => {
     setModal(post);
        fetch(`https://chitchat-zeta.vercel.app/comment/${post?._id}`)
          .then((res) => res.json())
          .then((data) => setComments(data));
  }

  const handleLikeModal = (likeInfo) => {
    setTotalLikes(likeInfo);
  };

  return (
    <div className="container font-color">
      <Post></Post>
      {posts?.length > 0 ? (
        <>
          {loader ? (
            <div
              className="spinner-border text-info d-flex justify-content-center col-3 mx-auto"
              role="status"
            ></div>
          ) : (
            <>
              {posts.map((post) => {
                return (
                  <>
                    <div className="shadow-lg input-bg mt-2 rounded p-3 bg-body border col-8 mx-auto">
                      <img
                        src={post?.user_photo}
                        alt={post?.user_name}
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <p>{post?.user_name}</p>
                      <p>{new Date(post?.milliseconds).toUTCString()}</p>
                      <p className="fs-4">{post?.post}</p>
                      <div className="text-center">
                        <img
                          src={post?.post_photo}
                          alt={post?.post}
                          className="img-fluid" style={{height: '50vh'}}
                        />
                      </div>
                      <div className="d-flex justify-content-evenly mt-2">
                        <div className="like d-flex gap-2">
                          <button
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#likeModal"
                            onClick={() => handleLikeModal(post.totalLikes)}
                          >
                            {post.totalLikes.length}
                          </button>
                          <button className="btn btn-outline-primary">
                            <FontAwesomeIcon
                              icon={faThumbsUp}
                              className={`fs-2 ${
                                post?.ownerLike ? "text-primary" : undefined
                              }`}
                              onClick={() => handleLike(post)}
                            />
                          </button>
                        </div>
                        <div className="comments">
                          <button
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#commentModal"
                            onClick={() => handleModal(post)}
                          >
                            <FontAwesomeIcon
                              icon={faComment}
                              className="fs-2"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <Pagenation
                total={totalPosts}
                whichPagenation="home"
              ></Pagenation>
            </>
          )}
        </>
      ) : (
        <div className="shadow-lg input-bg mt-2 rounded p-3 bg-body border col-8 mx-auto text-center">
          No posts Found!!!
        </div>
      )}
      <CommentModal post={modal} comments={comments}></CommentModal>
      <LikeModal likeInfo={totalLikes}></LikeModal>
    </div>
  );
};

export default Home;
