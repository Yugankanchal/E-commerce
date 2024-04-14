import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
function NavBar() {
  const [menueToggle, setmenueToggle] = useState(false);
  const [socialToggle, setsocialToggle] = useState(false);
  const [headerFixed, setheaderFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setheaderFixed(true);
    } else {
      setheaderFixed(false);
    }
  });
  console.log(window.screenY);
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="cointainer">
          <div className="header-top-area">
            <Link to={"/sign-up"} className="lab-btn">
              <span>Create Account</span>
            </Link>
            <Link to={"/logIn"} className="lab-btn">
              LogIn
            </Link>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="cointainer">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={`${logo}`} alt="" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menueToggle ? "active" : ""}`}>
                  <li>
                    <Link to={`/`}>Home</Link>
                  </li>
                  <li>
                    <Link to={`/shop`}>Shop</Link>
                  </li>
                  <li>
                    <Link to={`/blog`}>Blog</Link>
                  </li>
                  <li>
                    <Link to={`/About`}>About</Link>
                  </li>
                  <li>
                    <Link to={`/contact`}>Contact</Link>
                  </li>
                </ul>
              </div>
              <Link to={`sign-up`} className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to={`logIn`} className="lab-btn me-3 d-none d-md-block">
                LogIn
              </Link>
            </div>
            {/* menu - toggler */}
            <div
              onClick={() => {
                setmenueToggle(!menueToggle);
              }}
              className={`header-bar d-lg-none ${menueToggle ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* social Toggler */}
            <div
              className="ellepsis-bar d-md-none"
              onClick={() => {
                setsocialToggle(!socialToggle);
              }}
            >
              <i className="icofont-info-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
