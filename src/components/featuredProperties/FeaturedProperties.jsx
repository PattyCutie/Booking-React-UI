import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="featuredProperties">
      <div className="fppItem">
        <img
          className="fppImg"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
          alt=""
        />
        <span className="fppName">Hotel Name Lorem, ipsum.</span>
        <span className="fppCity">Bacelona</span>
        <span className="fppPrice">Starting from 100$</span>
        <div className="fppRating">
          <button>7.8</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fppItem">
        <img
          className="fppImg"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/96092474.jpg?k=9fd2a2b0301fb9c4b7fb8b4d179c2a821dbbdf9c1b7406d99867158dddc7b20f&o=&hp=1"
          alt=""
        />
        <span className="fppName">Hotel Name Lorem, ipsum.</span>
        <span className="fppCity">Rome</span>
        <span className="fppPrice">Starting from 100$</span>
        <div className="fppRating">
          <button>8.2</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fppItem">
        <img
          className="fppImg"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/153938495.jpg?k=1540b28b6c3a2a789c4c216f3317640125e2d85aaa71502ba8bcb926ea5025ad&o=&hp=1"
          alt=""
        />
        <span className="fppName">Hotel Name Lorem, ipsum.</span>
        <span className="fppCity">London</span>
        <span className="fppPrice">Starting from 100$</span>
        <div className="fppRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fppItem">
        <img
          className="fppImg"
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/355465267.jpg?k=5ce10be45cb869384bcdc3e063d3faf18eb55aab5ae83d86ff1fdf79281eca5f&o=&hp=1"
          alt=""
        />
        <span className="fppName">Hotel Name Lorem, ipsum.</span>
        <span className="fppCity">Bangkok</span>
        <span className="fppPrice">Starting from 100$</span>
        <div className="fppRating">
          <button>7.5</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
