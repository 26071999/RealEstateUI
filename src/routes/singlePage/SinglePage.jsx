import React from "react";
import "./SinglePage.scss";
import { Slider } from "../../components/slider/Slider";
import { Map } from '../../components/map/Map';
import { singlePostData } from "../../lib/dummyData";
import { userData } from "../../lib/dummyData";
import pin from '../../assets/pin.png'
import chat from '../../assets/chat.png';
import save from '../../assets/save.png';
import utility from '../../assets/utility.png'
import pet from '../../assets/pet.png'
import fee from '../../assets/fee.png'
import size from '../../assets/size.png'
import bed from '../../assets/bed.png'
import bath from '../../assets/bath.png'
import school from '../../assets/school.png'
import bustop from '../../assets/bus.png'
import restaurant from '../../assets/restaurant.png'
export const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={pin} alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  <b>$ {singlePostData.price}</b>
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              <p>{singlePostData.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src={utility} alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={pet} alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={fee} alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src={size} alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src={bed} alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src={bath} alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
          <div className="feature">
              <img src={school} alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={bustop} alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={restaurant} alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200 away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]}/>
          </div>
          <div className="buttons">
            <button>
              <img src={chat} alt="" />
              Send Message
            </button>
            <button>
              <img src={save} alt="" />
              Save Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
