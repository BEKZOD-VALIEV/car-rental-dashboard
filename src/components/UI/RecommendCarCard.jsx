import React from "react";

const RecommendCarCard = (props) => {

    const { carName, retweet, imgUrl, rentPrice } = props.item
  return (
    <div className="recommend__car-card">
      <div className="recommend__car-top">
        <h5>
          <span>
            <i class="ri-refresh-line"></i>
          </span>
          74% Recommended
        </h5>
      </div>

      <div className="recommend__car-img">
        <img src={miniCar} alt="" />
      </div>
      <div className="recommend__car-bottom">
        <h4>Mini Cooper</h4>
        <div className="recommend__car-other">
          <div className="recommed__icons">
            <p>
              <i class="ri-repeat-line"></i>
              130k
            </p>
            <p>
              <i class="ri-settings-2-line"></i>
            </p>
            <p>
              <i class="ri-timer-flash-line"></i>
            </p>
          </div>
          <span>$30/h</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCarCard;
