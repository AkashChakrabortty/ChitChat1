import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";
import Pagenation from "../../Pagenation/Pagenation";

const Interaction = () => {
 const {
   user,
   reFetch,
   loader,
   setLoader,
   startIndexLikes,
   startIndexComments,
 } = useContext(UserInfo);
  //  console.log(startIndex);
//  setStartIndex(0);
  // console.log(startIndex);

  const [totalLikes, setTotalLikes] = useState(0);
  const [totalLikesArray, setTotalLikesArray] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [totalCommentsArray, setTotalCommentsArray] = useState([]);
  useEffect(() => {
    fetch(
      `https://chitchat-zeta.vercel.app/likes/${user?.email}?startIndex=${startIndexLikes}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalLikesArray(data.filterLimitArray);
        setTotalLikes(data.total);
        setLoader(false);
        // console.log(data);
      });
  }, [user, reFetch]);

 useEffect(() => {
   fetch(
     `https://chitchat-zeta.vercel.app/comments/${user?.email}?startIndex=${startIndexComments}`
   )
     .then((res) => res.json())
     .then((data) => {
       
        setTotalCommentsArray(data.filterLimitArray);
        setTotalComments(data.total);
       setLoader(false);
      //  console.log(data);
     });
 }, [user, reFetch]);


  return (
    <div className="container">
      <div className="d-flex gap-2 col-10 mx-auto justify-content-evenly text-center">
        <div className="like col-md-8 border p-2 font-color">
          <h4 className="fs-2">Likes</h4>
          {totalLikesArray.length > 0 ? (
            <>
              {" "}
              {totalLikesArray.map((like) => {
                return (
                  <>
                    <hr />
                    <p>
                      You like {like.post_owner}'s post at{" "}
                      {new Date(like?.milliseconds).toUTCString()}
                    </p>
                    <hr />
                  </>
                );
              })}{" "}
            </>
          ) : (
            <>
              {" "}
              <hr /> <p>You didn't give any like</p> <hr />{" "}
            </>
          )}
          {totalLikesArray.length > 0 ? (
            <Pagenation total={totalLikes} whichPagenation="likes"></Pagenation>
          ) : undefined}
        </div>
        <div className="comment col-md-8 border p-2 font-color">
          <h4 className="fs-2">Comments</h4>
          {totalCommentsArray.length > 0 ? (
            <>
              {" "}
              {totalCommentsArray.map((comment) => {
                return (
                  <>
                    <hr />
                    <p>
                      You comment {comment.post_owner_name}'s post at{" "}
                      {new Date(comment?.milliseconds).toUTCString()}
                    </p>
                    <hr />
                  </>
                );
              })}{" "}
            </>
          ) : (
            <>
              {" "}
              <hr /> <p>You didn't comment</p> <hr />{" "}
            </>
          )}
          {totalCommentsArray.length > 0 ? (
            <Pagenation
              total={totalComments}
              whichPagenation="comments"
            ></Pagenation>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default Interaction;
