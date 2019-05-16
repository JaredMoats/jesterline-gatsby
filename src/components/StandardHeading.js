import React from 'react';

const StandardHeading = props => {
  /* If there is no title, return nothing. (Keeps an unnecessary h1 tag from being rendered) */
  if(!props.headingTitle) {
    return null;
  } else {
    return(
      <h1 className="standard-heading">{ props.headingTitle }</h1>
    );
  }
}

export default StandardHeading;
