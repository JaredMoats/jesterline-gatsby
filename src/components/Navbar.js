import React, { Component } from "react";
import { Link } from "gatsby";
import "../css/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let transformBurger = "navbar-burger is-active";
    let displayMenuMobile = "navbar-menu is-active";

    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item logo-dimensions"><img src="/assets/images/logo/logo.png" className="jl-logo"/></Link>

          <a
            role="button"
            className={
              !this.props.hamburgerClicked ? "navbar-burger" : transformBurger
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="jesterline-navbar"
            onClick={() => this.props.onClickBurger()}
          >
            <span aria-hidden="true" class="burger-white" />
            <span aria-hidden="true" class="burger-white" />
            <span aria-hidden="true" class="burger-white" />
          </a>
        </div>

        <div
          id="jesterline-navbar"
          className={
            !this.props.hamburgerClicked ? "navbar-menu" : displayMenuMobile
          }
        >
          <div className="navbar-start">
            <Link
              onClick={(string) => this.props.onClickBurgerTop("home")}
              className={this.props.activePage === "home" ? "navbar-item mobile-show jl-active" : "navbar-item mobile-show"}
              to="/"
            >
              Home
            </Link>

            <Link
              onClick={(string) => this.props.onClickBurgerTop("howItWorks")}
              exact
              className={this.props.activePage === "howItWorks" ? "navbar-item mobile-show jl-active" : "navbar-item mobile-show"}
              to="/how-it-works/"
            >
              How It Works
            </Link>

            <Link
              onClick={(string) => this.props.onClickBurgerTop("faq")}
              exact
              className={this.props.activePage === "faq" ? "navbar-item mobile-show jl-active" : "navbar-item mobile-show"}
              to="/faq/"
            >
              FAQ
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <span className="nav-social-icons navbar-item mobile-show">
                <a href="https://www.facebook.com/JesterLineGT/"><i className="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/jesterlinegt/"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com/JesterLineGT"><i className="fab fa-twitter-square"></i></a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
