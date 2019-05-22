/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import MetaData from "./MetaData"
import PropTypes from "prop-types"
import Navbar from "./Navbar"

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hamburgerClicked: false,
      activePage: "home",
    }
  }

  /* Helps keep track of if the hamburger menu is triggered or not */
  onClickBurgerTop(string) {
    /* Need to add the active class on the hamburger */
    if (!this.state.hamburgerClicked) this.setState({ hamburgerClicked: true, activePage: string });
    else this.setState({ hamburgerClicked: false, activePage: string });

    /*window.scrollTo(0, 0);*/
  }

  onClickBurger() {
    if (!this.state.hamburgerClicked) this.setState({ hamburgerClicked: true });
    else this.setState({ hamburgerClicked: false });
  }

  render() {
    return (
      <React.Fragment>
        <MetaData/>
        <Navbar
          hamburgerClicked={ this.state.hamburgerClicked }
          activePage={ this.state.activePage }
          onClickBurgerTop={ (string) => this.onClickBurgerTop(string) }
          onClickBurger={ () => this.onClickBurger() }
        />
        {this.props.children}
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
