import React, { useState } from "react";
import "./chat.scss";
import userLogo from "../../assets/logo.png";
import close from "../../assets/close.png";
import send from "../../assets/send.png";
export const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src={userLogo} alt="" />
          <span>Prakash Archunan</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src={userLogo} alt="" />
          <span>Prakash Archunan</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src={userLogo} alt="" />
          <span>Prakash Archunan</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src={userLogo} alt="" />
          <span>Prakash Archunan</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src={userLogo} alt="" />
          <span>Prakash Archunan</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img src={userLogo} alt="" />
          <span>Prakash Archunan</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={userLogo} alt="" />
              Prakash Archunan
            </div>
            <span className="close" onClick={()=>setChat(null)}>
              <img src={close} alt="" />
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <hr />
          <div className="bottom">
            <textarea></textarea>
            <button>
              <img src={send} alt="" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
