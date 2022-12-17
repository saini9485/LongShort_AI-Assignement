import React from "react";

import { RiDashboardFill } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { ImBlogger2 } from "react-icons/im";

import "./Profile.css"

export const Profile = () => {
  return (
    <>
      <div className="main-container">
        <div className="profile-container">
            <div className="profile-logo">
          <img
            src="https://i.stack.imgur.com/lAwxR.png"
            class="profile"
            alt="Avatar"
          />
          </div>
          <div className="profile-text">
            <h4>Rajesh Saini</h4>
            {/* <p>Credit Used:113.2</p> */}
          </div>
        </div>
        <div className="changePlane-div">
          <button className="changePlane-btn">
            <BiFoodMenu />
            Change Plan
          </button>
        </div>
        <div >
          <p className="product-map">
            <RiDashboardFill />
            Product roadmap
          </p>{" "}
        </div>
        <div >
          <p className="new">
            <ImBlogger2 />
            What's New
          </p>
        </div>
      </div>

      <div className="collapse">
        <div>
        <img className="arrow"
          src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
          alt="cls"
        />
        </div>
        <span >Collapse</span>
      </div>
    </>
  );
};
