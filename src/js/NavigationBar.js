import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBFormInline,
} from "mdbreact";

class NavigationBar extends Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <Router>
        <div>
          <MDBNavbar
            color="primary-color"
            dark
            expand="md"
            fixed="top"
            scrolling
            transparent
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text">MDB</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.handleTogglerClick} />
              <MDBCollapse isOpen={this.state.collapsed} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input
                          className="form-control mr-sm-2"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {this.state.collapsed && overlay}
        </div>
      </Router>
    );
  }
}

export default NavigationBar;
