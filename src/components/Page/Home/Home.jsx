import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
import Post from "../../Post/Post";

const Home = () => {
  const { user } = useContext(UserInfo);
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/friendsPost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user]);

  return (
    <div className="container font-color">
      <Post></Post>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <>
                <div className="shadow-lg input-bg mt-2 rounded p-3 bg-body border col-8 mx-auto">
                  <img
                    src={post.user_photo}
                    alt={post.user_name}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <p>{post.user_name}</p>
                  <p>{new Date(post.milliseconds).toUTCString()}</p>
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

          <nav aria-label="Page navigation example">
            <div className="pagination justify-content-center my-3">
              <li className="page-item">
                <a className="page-link input-bg font-color" href="f">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link font-color" href="f">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link font-color" href="f">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link font-color" href="f">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link input-bg font-color" href="f">
                  Next
                </a>
              </li>
            </div>
          </nav>
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
