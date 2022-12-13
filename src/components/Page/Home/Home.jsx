import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
import Post from "../../Post/Post";
import CommentModal from "./CommentModal";

const Home = () => {
  const { user } = useContext(UserInfo);
  const [posts, setPosts] = useState();
  const [total, setTotal] = useState();
  let [startIndex, setStartIndex] = useState(0);
  const [loader, setLoader] = useState(true);
  const [reFetch, setReFetch] = useState(false);
  const [ modal , setModal] = useState({});
  const [comments, setComments] = useState([]);

  
  useEffect(() => {
    fetch(
      `http://localhost:5000/friendsPost/${user?.email}?startIndex=${startIndex}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.filterLimitArray);
        setTotal(data.total);
        setLoader(false);
        console.log(data);
      });
  }, [user, reFetch]);
  const loadFirst = () => {
    setLoader(true);
    setStartIndex(0);
    setReFetch(!reFetch);
  };
  const loadPrevious = () => {
    setLoader(true);
    setStartIndex(startIndex - 2);
    setReFetch(!reFetch);
  };
  const loadNext = () => {
    setLoader(true);
    setStartIndex(startIndex + 2);
    setReFetch(!reFetch);
  };
  const loadLast = () => {
    setLoader(true);
    setStartIndex(total - 2);
    setReFetch(!reFetch);
  };
  // console.log(startIndex);
  // console.log(posts);
  const handleLike = (post) => {
    // setLike(!like);

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
    // const islike = { like: like };
    // console.log(likeInfo);
    // setReFetch(!reFetch);
    fetch(`http://localhost:5000/friendPostLike/`, {
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
  };
  
 
  const handleModal = (post) => {
     setModal(post);
        fetch(`http://localhost:5000/comment/${post?._id}`)
          .then((res) => res.json())
          .then((data) => setComments(data));
  }
  return (
    <div className="container font-color">
      <Post></Post>
      {posts ? (
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
                      <div>
                        <img
                          src={post?.post_photo}
                          alt={post?.post}
                          className="img-fluid"
                        />
                      </div>
                      <div className="d-flex justify-content-evenly mt-2">
                        <div className="like">
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

              <nav aria-label="Page navigation example border">
                <div className="pagination justify-content-center my-3 ">
                  <li className="page-item mx-2">
                    {startIndex === 0 ? undefined : (
                      <button
                        className="btn btn-warning page-link input-bg font-color"
                        onClick={loadFirst}
                      >
                        First
                      </button>
                    )}
                  </li>
                  <li className="page-item">
                    {startIndex === 0 ? undefined : (
                      <button
                        className="btn btn-warning page-link input-bg font-color"
                        onClick={loadPrevious}
                      >
                        Previous
                      </button>
                    )}
                  </li>
                  <li className="page-item mx-2">
                    {startIndex === total - 2 ? undefined : (
                      <button
                        className="btn btn-warning page-link input-bg font-color"
                        onClick={loadNext}
                      >
                        Next
                      </button>
                    )}
                  </li>
                  <li className="page-item">
                    {startIndex === total - 2 ? undefined : (
                      <button
                        className="btn btn-warning page-link input-bg font-color"
                        onClick={loadLast}
                      >
                        Last
                      </button>
                    )}
                  </li>
                </div>
              </nav>
            </>
          )}
        </>
      ) : (
        <div className="shadow-lg input-bg mt-2 rounded p-3 bg-body border col-8 mx-auto text-center">
          No posts Found!!!
        </div>
      )}
      <CommentModal post={modal} comments={comments}></CommentModal>
    </div>
  );
};

export default Home;
