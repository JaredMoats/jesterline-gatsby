import React, { Component } from "react";
import { Link } from "react-scroll";
import "../css/Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>
        West Virginia's <span className="jl-yellow">first</span> eSports
        <br /> and Virtual Reality <br />Gaming Center
      </h1>
      <div className="button-container">
        <Link
          className="button is-jl-red"
          to="games"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Games
        </Link>
        <Link
          className="button is-jl-red"
          to="prices"
          spy={true}
          smooth={true}
          offset={-90}
          duration={1000}
        >
          Prices
        </Link>
      </div>
    </div>
  );
};

export default Landing;
