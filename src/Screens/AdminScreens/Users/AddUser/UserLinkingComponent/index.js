import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import UserIcon from "../../../../../Assets/Icons/User_Icon.svg";
import ShieldIcon from "../../../../../Assets/Icons/Shield_Icon.svg";
import SettingsIcon from "../../../../../Assets/Icons/Settings_Icon.svg";
import { useRouteMatch } from "react-router-dom";
const UserLinkingComponent = () => {
    const{path,url}=useRouteMatch();

  return (
    <>
      <div
        className="user_linking_card"
        style={{ width: "auto", borderRadius: 0 }}
      >
        <div className="linking_card-body">
          <NavLink
            activeClassName="active_nav-link"
            exact
            to={`/adduser`}
            className="nav-link user_nav-link"
          >
              <img src={UserIcon} alt="UserIcon" className="user_Icons"/>
            Profile Information
          </NavLink>
          <NavLink
            activeClassName="active_nav-link"
            exact
            to="/adduser/approvalSettings"
            className="nav-link user_nav-link"
          >
                <img src={ShieldIcon} alt="ShieldIcon" className="user_Icons"/>
           Approval Settings
          </NavLink>
          <NavLink
            activeClassName="active_nav-link"
            exact
            to="/adduser/accountSettings"
            className="nav-link user_nav-link"
          >
                <img src={SettingsIcon} alt="SettingsIcon" className="user_Icons"/>
            Account Settings
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserLinkingComponent;
