import React, { useContext, useState } from 'react';
import { UserInfo } from '../../../UserContext/AuthProvider';

const CommentModal = ({ post, comments }) => {
  const { user } = useContext(UserInfo);
  const [empty, setEmpty] = useState(true);
  

  const handleForm = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    if (text.trim().length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
      const milliseconds = new Date().getTime();

      const commentInfo = {
        post: post.post,
        post_photo: post.post_photo,
        post_owner_email: post.user_email,
        post_owner_name: post.user_name,
        post_owner_photo: post.user_photo,
        milliseconds: milliseconds,
        previous_id: post._id,
        comment_giver_name: user.displayName,
        comment_giver_email: user.email,
        comment_giver_photo: user.photoURL,
        comment: text,
      };
      //insert db
      fetch("http://localhost:5000/comment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(commentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          event.target.reset();
        });
    }
  };
  return (
    <div>
      <div
        className="modal fade"
        id="commentModal"
        tabIndex="-1"
        aria-labelledby="commentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="allcomments my-2">
                <h6 className="text-center text-warning">
                  <span className="border-bottom border-info border-2">
                    Total comments:{comments.length}
                  </span>
                </h6>
                {comments?.map((singleComment) => {
                  return (
                    <>
                      <div className="d-flex">
                        <div className="img  me-2">
                          <img
                            src={singleComment.comment_giver_photo}
                            alt={singleComment.comment_giver_name}
                            style={{
                              height: "35px",
                              width: "35px",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div className="name-comments">
                          <h5>{singleComment.comment_giver_name}</h5>
                          <div className="comment border border-info p-2 rounded">
                            {singleComment.comment}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <form onSubmit={handleForm}>
                <textarea
                  className="form-control"
                  placeholder="Write your comment...."
                  id="floatingTextarea"
                  style={{ height: "35vh" }}
                  name="text"
                ></textarea>
                {empty ? (
                  <p className="warning text-danger">You can't comment empty</p>
                ) : undefined}
                <button type="submit" className="btn btn-primary mt-2">
                  Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;