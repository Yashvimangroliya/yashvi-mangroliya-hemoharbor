// import React,{useEffect} from "react";
import { useLocation, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { userMenu } from "./Menus/userMenu";
import "../../../styles/Layout.css";

const Sidebar = () => {
  // const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  // useEffect(() => {
  //   console.log(user);
  // });
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {userMenu.map((menu, index) => {
            const isActive = location.pathname === menu.path;
            return (
              <div
                key={index}
                className={`menu-item ${isActive && "active"}`}
              >
                <i className="menu.icon"></i>
                <Link to={menu.path}>{menu.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
