import React, { useContext } from "react";
import { UserInfo } from "../../UserContext/AuthProvider";

const Pagenation = ({ total, whichPagenation }) => {
  // console.log(total);
  // console.log(whichPagenation);
  const {
    reFetch,
    setReFetch,
    setLoader,
    setStartIndex,
    startIndexLikes,
    setStartIndexLikes,
    startIndexHomePost,
    setStartIndexHomePost,
    startIndexOwnPost,
    setStartIndexOwnPost,
    startIndexComments,
    setStartIndexComments,
    startIndexChitchatUsers,
    setStartIndexChitchatUsers,
    startIndexFriendReq,
    setStartIndexFriendReq,
    startIndexFriend,
    setStartIndexFriend,
  } = useContext(UserInfo);
  // console.log(startIndex);

  let startIndex;
  if (whichPagenation === "likes") {
    startIndex = startIndexLikes;
  } else if (whichPagenation === "home") {
    startIndex = startIndexHomePost;
  } else if (whichPagenation === "ownPost") {
    startIndex = startIndexOwnPost;
  } else if (whichPagenation === "comments") {
    startIndex = startIndexComments;
  } else if (whichPagenation === "ChitChatUsers") {
    startIndex = startIndexChitchatUsers;
  } else if (whichPagenation === "FriendReq") {
    startIndex = startIndexFriendReq;
  } else if (whichPagenation === "Friend") {
    startIndex = startIndexFriend;
  }
  const loadFirst = () => {
    setLoader(true);
    // setStartIndex(0);
    if (whichPagenation === "likes") {
      setStartIndexLikes(0);
    } else if (whichPagenation === "home") {
      setStartIndexHomePost(0);
    } else if (whichPagenation === "ownPost") {
      setStartIndexOwnPost(0);
    } else if (whichPagenation === "comments") {
      setStartIndexComments(0);
    } else if (whichPagenation === "ChitChatUsers") {
      setStartIndexChitchatUsers(0);
    } else if (whichPagenation === "FriendReq") {
      setStartIndexFriendReq(0);
    } else if (whichPagenation === "Friend") {
      setStartIndexFriend(0);
    }
    setReFetch(!reFetch);
  };
  const loadPrevious = () => {
    setLoader(true);
    // setStartIndex(startIndex - 2);
    if (whichPagenation === "likes") {
      setStartIndexLikes(startIndexLikes - 2);
    } else if (whichPagenation === "home") {
      setStartIndexHomePost(startIndexHomePost - 2);
    } else if (whichPagenation === "ownPost") {
      setStartIndexOwnPost(startIndexOwnPost - 2);
    } else if (whichPagenation === "comments") {
      setStartIndexComments(startIndexComments - 2);
    } else if (whichPagenation === "ChitChatUsers") {
      setStartIndexChitchatUsers(startIndexChitchatUsers - 2);
    } else if (whichPagenation === "FriendReq") {
      setStartIndexFriendReq(startIndexFriendReq - 2);
    } else if (whichPagenation === "Friend") {
      setStartIndexFriend(startIndexFriend - 2);
    }
    setReFetch(!reFetch);
  };
  const loadNext = () => {
    setLoader(true);
    // setStartIndex(startIndex + 2);
    if (whichPagenation === "likes") {
      setStartIndexLikes(startIndexLikes + 2);
    } else if (whichPagenation === "home") {
      setStartIndexHomePost(startIndexHomePost + 2);
    } else if (whichPagenation === "ownPost") {
      setStartIndexOwnPost(startIndexOwnPost + 2);
    } else if (whichPagenation === "comments") {
      setStartIndexComments(startIndexComments + 2);
    } else if (whichPagenation === "ChitChatUsers") {
      setStartIndexChitchatUsers(startIndexChitchatUsers + 2);
    } else if (whichPagenation === "FriendReq") {
      setStartIndexFriendReq(startIndexFriendReq + 2);
    } else if (whichPagenation === "Friend") {
      setStartIndexFriend(startIndexFriend + 2);
    }
    setReFetch(!reFetch);
  };
  const loadLast = () => {
    setLoader(true);
    // setStartIndex(total - 2);
    if (whichPagenation === "likes") {
      setStartIndexLikes(total - 2);
    } else if (whichPagenation === "home") {
      setStartIndexHomePost(total - 2);
    } else if (whichPagenation === "ownPost") {
      setStartIndexOwnPost(total - 2);
    } else if (whichPagenation === "comments") {
      setStartIndexComments(total - 2);
    } else if (whichPagenation === "ChitChatUsers") {
      setStartIndexChitchatUsers(total - 2);
    } else if (whichPagenation === "FriendReq") {
      setStartIndexFriendReq(total - 2);
    } else if (whichPagenation === "Friend") {
      setStartIndexFriend(total - 2);
    }
    setReFetch(!reFetch);
  };
  return (
    <div>
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
    </div>
  );
};

export default Pagenation;
