import { useContext } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { NavLink } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";

const Popovernav = () => {
  const { logout, user } = useContext(UserInfo);
  // console.log(user);
  // const [name, setName] = useState();
  let activeClassName = "font-color fs-6";
  let inActiveClassName = "font-color text-decoration-none fs-6";

  const handleLogout = () => {
    logout();
  };

  // useEffect(() => {
  //   fetch(`https://chitchat-zeta.vercel.app/user/${email}`)
  //     .then((res) => res.json())
  //     .then((data) => setName(data.name));
  // }, []);
  return (
    <div>
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover
              id={`popover-positioned-${placement}`}
              className="font-color input-bg"
            >
              <Popover.Header as="h3" className="font-color input-bg">
                {user?.displayName}
              </Popover.Header>
              <Popover.Body>
                <NavLink
                  to="/notification"
                  className={({ isActive }) =>
                    isActive ? activeClassName : inActiveClassName
                  }
                >
                  Notification(2)
                </NavLink>
                <hr />
                <button className="btn btn-warning" onClick={handleLogout}>
                  Log out
                </button>
              </Popover.Body>
            </Popover>
          }
        >
          <div>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </div>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default Popovernav;
