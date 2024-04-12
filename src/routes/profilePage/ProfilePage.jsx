import React from "react";
import userLogo from "../../assets/logo.png";
import "./profilePage.scss";
import { List } from "../../components/list/List";
import { Chat } from "../../components/chat/Chat";
export const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="userContainer">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
              <span>
                Avatar: <img src={userLogo} alt="" />{" "}
              </span>
              <span>
                Username: <b>Prakash Archunan</b>
              </span>
              <span>
                E-mail: <b>pr78847@gmail.com</b>
              </span>
            </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatBox">
        <div className="wrapper">
            <Chat/>
        </div>
      </div>
    </div>
  );
};
