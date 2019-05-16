import React from "react";
import SectionHeading from "./SectionHeading";
import "./../css/Prices.css";

const Prices = () => {
  return (
    <div className="prices-section-container">
      <SectionHeading headerName="Prices" sectionId="prices"/>
      <div className="price-clusters-container">
        <div className="price-cluster">
          <h2>e-Sports</h2>
          <div className="price-divider" />
          <img
            src="/assets/images/prices/mouse-prices-image.png"
            alt="Gaming Mouse Graphic"
            className="price-graphic"
          />
          <h3>1-Hour Pass - $7</h3>
          <h3>3-Hour Pass - $20</h3>
          <h3>5-Hour Pass - $30</h3>
          <h3>7-Hour Pass - $40</h3>
          <h3>All-Day Pass* - $25</h3>
          {/*<h5>*The All-Day Pass expires at the end of the business day it was purchased.</h5>*/}
        </div>
        <div className="price-cluster">
          <h2>Virtual Reality</h2>
          <div className="price-divider" />
          <img
            src="/assets/images/prices/vr-prices-image.png"
            alt="Virtual Reality Graphic"
            className="price-graphic"
          />
          <h3>15-Minute Pass - $15</h3>
          <h3>30-Minute Pass - $25</h3>
          <h3>60-Minute Pass - $45</h3>
          <h3>2-Hour Pass - $85</h3>
        </div>
        <div className="price-cluster">
          <h2>Parties & Events</h2>
          <div className="price-divider" />
          <img
            src="/assets/images/prices/party-prices-image.png"
            alt="Parties and Events Graphic"
            className="price-graphic"
          />
          <h3>2-Hour Party - $225</h3>
          <h3>3-Hour Party - $300</h3>
          <h3>3-Hour Private Party - $500</h3>
          <h3>Event Room Rental - $50/hr*</h3>
          <h5>
            {/*The event room can only be rented at this price for non-party events.*/}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Prices;
