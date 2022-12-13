import React from 'react';

const LikeModal = ({ likeInfo }) => {
  console.log(likeInfo);
  return (
    <div>
      <div
        className="modal fade"
        id="likeModal"
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
              {
              likeInfo.map(info => {
                return (
                  <>
                    <div className="d-flex gap-2 my-2">
                      <img
                        src={info.like_giver_photo}
                        alt={info.like_giver_name}
                        style={{
                          height: "35px",
                          width: "35px",
                          borderRadius: "50%",
                        }}
                      />
                      <span>{info.like_giver_name}</span>
                    </div>
                  </>
                );
              })
              }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeModal;