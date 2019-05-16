import React, { Component } from "react";
import "../css/StandardLanding.css";

const StandardLanding = props => {
  const backgroundImage = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
      props.imageURL
    })`
  };

  return (
    <div className="header-container" style={backgroundImage} id={ props.landingId }>
      <h1>{props.headerTitle}</h1>
    </div>
  );
};

export default StandardLanding;
