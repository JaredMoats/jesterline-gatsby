import React from 'react';
import Layout from "./../components/layout";
import StandardLanding from "./../components/StandardLanding";
import StandardPageView from "./../components/StandardPageView";
import Prices from "./../components/Prices";
import Footer from "./../components/Footer";
import pageContent from "./../data/howItWorksText";
import howItWorksImage from "../images/page-images/how-it-works.jpg";

const HowItWorks = () => {
    return(
      <Layout>
        <div className="standard-page-container">
          <StandardLanding
            imageURL={howItWorksImage}
            headerTitle="How It Works"
            landingId="how-it-works"
          />
          <StandardPageView
            pageContent={ pageContent }
          />
          <Prices />
          <Footer />
        </div>
      </Layout>
    );
}

export default HowItWorks;
