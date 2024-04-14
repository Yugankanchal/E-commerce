import React from "react";
import { Link } from "react-router-dom";
const btnText = "Sign-up for Free";
const title = "Shop anytime anywhere";
const des =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptatum. Ex, quibusdam optio dolor et atque qui delectus doloremque modi temporibus aliquam, voluptatibus odit earum minima expedita nemo magni corrupti!";
function AppSection() {
  return (
    <div className="app-section padding-tb">
      <div className="cointainer">
        <div className="section-header text-center">
          <Link to={"sign-up"} className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{des}</p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="#">
                <img src="/src/assets/images/app/01.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/src/assets/images/app/02.jpg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppSection;
