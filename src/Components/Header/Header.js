import React from 'react'
import Logo from "../../Assets/Icons/CoffeeWeb_Logo.png";
import SIcon from "../../Assets/Icons/S_Icon.png";
import Notification from "../../Assets/Icons/Notification_Icon.png";
import PowerIcon from "../../Assets/Icons/Power_Icon.png";
import "./Header.scss"
import CountrySelection from '../CountrySelection/CountrySelection';
const Header = () => {
  return (
    <>
  <div className='pre_header'>
         <nav className="navbar navbar-expand-lg fixed-top pre_header-bg">
         <div className="navbar-brand text-white font-weight-bold" href="#">
        <img src={Logo} className="d-inline-block align-top" alt="" />
      </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
              <a className="nav-link" href="#">
                <CountrySelection/>
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <div className='round'>
  <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
    Link
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>
</li> */}

            <li className="nav-item active">
              <a className="nav-link" href="#">
                <img src={SIcon} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <img src={Notification} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <img src={PowerIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Header