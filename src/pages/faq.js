import React from 'react';
import Layout from "./../components/Layout";
import StandardLanding from "./../components/StandardLanding";
import StandardPageView from "./../components/StandardPageView";
import Footer from "./../components/Footer";
import pageContent from "./../data/faqText";

const Faq = () => {
    return(
      <Layout>
        <div className="standard-page-container">
          <StandardLanding
            imageURL="/assets/images/page-images/faq.jpg"
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
