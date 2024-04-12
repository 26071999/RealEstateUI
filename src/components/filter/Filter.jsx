import React from "react";
import "./filter.scss";
import search_icon from "../../assets/search.png";
export const Filter = () => {
  return (
    <div className="filter">
      <div className="filterBox">
         <h2>
            Search Results for <b>London</b>
          </h2>
        <div className="top">
          <div className="item">
            <label htmlFor="city">Location</label>
            <input
              name="city"
              id="city"
              type="text"
              placeholder="City Location"
            />
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input
              name="minPrice"
              id="minPrice"
              min={0}
              max={100000000}
              type="number"
              placeholder="0"
            />
          </div>
          <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              name="maxPrice"
              id="maxPrice"
              min={0}
              max={100000000}
              type="number"
              placeholder="0"
            />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input
              name="bedroom"
              id="bedroom"
              min={0}
              max={100000000}
              type="number"
              placeholder="0"
            />
          </div>
          <button>
            <img src={search_icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
