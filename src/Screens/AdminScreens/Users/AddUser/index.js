import React from "react";
import UserLinkingComponent from "./UserLinkingComponent";
import "./style.scss";
import {Switch,Router,Link } from "react-router-dom";
import ProfileInformation from "./ProfileInformation";
import AccountSettings from "./AccountSettings";
import ApprovalSettings from "./ApprovalSettings";
import { useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom";
const AddUser = () => {
  return (
    <>
      <div className="add_user_details container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <UserLinkingComponent />
            
          </div>
          <div className="col-md-8 col-sm-12">
            <Switch>
              <Route exact path='/adduser' component={ProfileInformation}/>
              <Route exact path="/adduser/accountSettings" component={AccountSettings}/>
              <Route exact path="/adduser/approvalSettings" component={ApprovalSettings}/>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
