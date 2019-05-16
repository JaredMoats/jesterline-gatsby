import React from 'react';
import StandardHeading from './StandardHeading';
import StandardParagraph from './StandardParagraph';
import './../css/StandardPageView.css';



const StandardPageView = props => {
  return(
    <div className="standard-page-view-container">
      {
        props.pageContent.map((paragraph, key) =>
        <>
          <StandardHeading
            headingTitle ={ paragraph.heading }
            key={ key }
          />
          <StandardParagraph
            text={ paragraph.text }
            key={ key }
          />
        </>
        )
      }
    </div>
  );
}

export default StandardPageView;
