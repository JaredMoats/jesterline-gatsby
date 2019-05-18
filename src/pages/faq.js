import React from 'react';
import Layout from "./../components/layout";
import StandardLanding from "./../components/StandardLanding";
import StandardPageView from "./../components/StandardPageView";
import Footer from "./../components/Footer";
import faqImage from "../images/page-images/faq.jpg"
import pageContent from "./../data/faqText";

const Faq = () => {

    return(
      <Layout>
        <div className="standard-page-container">
          <StandardLanding
            imageURL={ faqImage }
            headerTitle="Frequently Asked Questions"
            landingId="faq"
          />
          <StandardPageView
            pageContent={ pageContent }
          />
          <Footer />
        </div>
      </Layout>
    );
}

export default Faq;
