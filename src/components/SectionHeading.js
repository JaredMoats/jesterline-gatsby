import React from "react";

const SectionHeading = props => {
  return (
      <h1 className="section-header" id={ props.sectionId }>{props.headerName}</h1>
  );
};

export default SectionHeading;
