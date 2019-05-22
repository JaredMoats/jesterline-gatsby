import React from "react";
import Layout from "./../components/layout";
import Landing from "./../components/Landing";
import GamesList from "./../components/GamesList";
import Prices from "./../components/Prices";
import Footer from "./../components/Footer";
import landingBackground from "../images/page-images/landing-cover.jpg";
import "./../css/Home.css"

const Home = props => {
  return (
    <Layout>
      <div className="home">
        <Landing
          imageURL={ landingBackground }
        />
        <div className="aboutBlurb">
          <div className="divider" />
          <h1>What is JesterLine?</h1>
          <p>
            JesterLine is West Virginia's FIRST high-end eSports and Virtual
            Reality gaming center. We are a safe, family-friendly environment
            where everyone can experience the best that eSports and Virtual
            Reality has to offer, including local and global tournaments with
            other gamers.
          </p>
          <div className="divider" />
        </div>
        <GamesList />
        <Prices />
        <Footer />
      </div>
    </Layout>
  )
}

export default Home
