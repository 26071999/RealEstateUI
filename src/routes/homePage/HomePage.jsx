import React from "react";
import "./HomePage.scss";
import contentImage from "../../assets/bg.png";
import { SearchBar } from "../../components/searchBar/SearchBar";
export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            asperiores voluptates maxime aspernatur deleniti corrupti ea beatae
            deserunt. Consequatur ad deleniti vero ullam saepe sint aliquam
            fugit excepturi repellat sed?
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={contentImage} alt="img" />
      </div>
    </div>
  );
};
