import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../UserContext/AuthProvider";

const ProfileInfo = () => {
  const { user } = useContext(UserInfo);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://chitchat-zeta.vercel.app/profileInfo/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user]);

  return (
    <>
      {data ? (
        <div className="container col-10 col-sm-6 mx-auto mt-4 fs-4 font-color text-center input-bg bg-body rounded p-3">
          {data.study ? <p>Study: {data.study}</p> : undefined}
          {data.works ? <p>Works at: {data.works}</p> : undefined}
          {data.lives ? <p>Lives in: {data.lives}</p> : undefined}
          {data.relationship ? <p>{data.relationship}</p> : undefined}
        </div>
      ) : (
        <div className="container col-10 col-sm-6 mx-auto mt-4 fs-4 font-color text-center input-bg bg-body rounded p-3">
          <p>No prile info found!Please edit your profile</p>
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
