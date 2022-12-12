import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
import Post from "../../Post/Post";

const Home = () => {
  const { user } = useContext(UserInfo);
  const [posts, setPosts] = useState();
  const [total, setTotal] = useState();
  let [startIndex, setStartIndex] = useState(0);
  const [loader, setLoader] = useState(true);
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    fetch(
      `http://localhost:5000/friendsPost/${user?.email}?startIndex=${startIndex}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.filterLimitArray);
        setTotal(data.total);
        setLoader(false);
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
                      <div className="d-flex justify-content-evenly">
                        <div className="like">
                          <FontAwesomeIcon icon={faThumbsUp} className="fs-2" />{" "}
                          (100)
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
    </div>
  );
};

export default Home;
