import { useContext } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { UserInfo } from "../../UserContext/AuthProvider";

const Popovernav = () => {
  const { logout, user } = useContext(UserInfo);

  const handleLogout = () => {
    logout();
  };

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
                <button className="btn btn-primary" onClick={handleLogout}>
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
