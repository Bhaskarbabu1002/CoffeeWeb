import React, { useState } from "react";
import "./MenuDropdown.scss";
// import DownArrow from "../../Assets/Icons/DownArrow.gif";
// import RightArrow from "../../Assets/Icons/RightArrow.gif";
import { ReactComponent as DownArrow} from "../../Assets/Icons/chevrons-down.svg";
import { ReactComponent as RightArrow} from "../../Assets/Icons/chevrons-right.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";
// import { NavDropdown, Container, Media } from "react-bootstrap";
const MenuDropdown = () => {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    console.log("showDropdown");
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const [multishow, setMultiShow] = useState(false);
  const showMultiDropdown = (e) => {
    setMultiShow(!multishow);
  };
  const hideMultiDropdown = (e) => {
    setMultiShow(false);
  };
  // Traders
  const [tradeshow, setTradeShow] = useState(false);
  const showTradeDropdown = (e) => {
    setTradeShow(!tradeshow);
  };
  const hideTradeDropdown = (e) => {
    setTradeShow(false);
  };
  // News Feed
  const [newsshow, setNewsShow] = useState(false);
  const showNewsDropdown = (e) => {
    setNewsShow(!newsshow);
  };
  const hideNewsDropdown = (e) => {
    setNewsShow(false);
  };
  // Users
  const [usershow, setUserShow] = useState(false);
  const showUserDropdown = (e) => {
    setUserShow(!usershow);
  };
  const hideUserDropdown = (e) => {
    setUserShow(false);
  };
  return (
    <>
<div className="dd_container" 
 onMouseEnter={showDropdown}
    onMouseLeave={hideDropdown}>
  <div className="main_nav-link"   >
    Admin
  <DownArrow stroke={"#2163f3"} className="arrow_svg"/>
  </div>
  
 
    <div className={ show?"dd_container_menu":"dd_container_menu_hide"}>
   
    <div className="multi" onMouseEnter={showMultiDropdown} onMouseLeave={hideMultiDropdown}>
      <div className="nav-link sub_nav" 
     >
       <span>Coffee Entries</span>
       <RightArrow stroke={"#2163f3"} className="arrow_svg"/>
    {/* <img src={RightArrow} className="arrow_svg" style={{width:15}}/> */}
  </div>
  <div className={multishow?'sub_menu':'sub_menu_hide' } > 
               <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/"
                  className="nav-link "
                >
                  Raw Coffee Price Entry
                </NavLink>
                <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/differentialsentry"
                  className="nav-link "
                >
                  Differential Entry
                </NavLink>
                <NavLink
                activeClassName="active_nav-link"
                exact
                to="/freightrateentry"
                className="nav-link "
              >
                Freight Rate Entry
              </NavLink>
  </div>

  </div>
  <div className="multi" onMouseEnter={showTradeDropdown} onMouseLeave={hideTradeDropdown}>
  <div className="nav-link sub_nav" 
     >
       <span>   Trade Box</span>

       <RightArrow stroke={"#2163f3"} className="arrow_svg"/>
  </div>
  <div className={tradeshow?'sub_menu trade_sub_menu':'sub_menu_hide' } > 
               <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/listtraders"
                  className="nav-link "
                >
                  List Traders
                </NavLink>
                <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/addtradebox"
                  className="nav-link "
                >
                 Add Traders
                </NavLink>
  </div>
  </div>
  {/* NewsFeed */}
  <div className="multi" onMouseEnter={showNewsDropdown} onMouseLeave={hideNewsDropdown}>
  <div className="nav-link sub_nav" 
     >
   News Feed
   <RightArrow stroke={"#2163f3"} className="arrow_svg"/>
  </div>
  <div className={newsshow?'sub_menu news_sub_menu':'sub_menu_hide' } > 
               <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/listnewsfeed"
                  className="nav-link "
                >
                  List News Feed
                </NavLink>
                <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/addnewsfeed"
                  className="nav-link "
                >
                 Add News Feed
                </NavLink>
                <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/uploadvideo"
                  className="nav-link "
                >
                 Upload Video
                </NavLink>
  </div>
  </div>
    {/* Users*/}
  <div className="multi" onMouseEnter={showUserDropdown} onMouseLeave={hideUserDropdown}>
  <div className="nav-link sub_nav" 
     >
   Users
   <RightArrow stroke={"#2163f3"} className="arrow_svg"/>
  </div>
  <div className={usershow?'sub_menu user_sub_menu':'sub_menu_hide' } > 
               <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/listusers"
                  className="nav-link "
                >
                  List Users
                </NavLink>
                <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/adduser"
                  className="nav-link "
                >
                 Add User
                </NavLink>
                <NavLink
                  activeClassName="active_nav-link"
                  exact
                  to="/approvallist"
                  className="nav-link "
                >
                 My Approval
                </NavLink>
  </div>
  </div>
    {/* <a className="dropdown-item" href="#">Trade Box</a> */}
    {/* <a className="dropdown-item" href="#">News Feed</a> */}
    {/* <a className="dropdown-item" href="#">Users</a>
    <a className="dropdown-item" href="#">Menu Group</a> */}
  </div>
  
 
</div>

    </>
  );
};

export default MenuDropdown;
