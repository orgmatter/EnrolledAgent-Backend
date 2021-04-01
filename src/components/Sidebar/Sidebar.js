
/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

import axios from "../../redux/axiosInstance";
// reactstrap components

import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import smallLogo from '../../assets/img/SmallLogo.png'
import Avatar from "../../assets/img/avatar.jpg"

class Sidebar extends React.Component {
  state = {
    collapseOpen: false,
    profile: {}
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };
 logoutUser = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  }
  // creates the links that appear in the left menu / Sidebar
  createLinks = routes => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={this.closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };
  componentDidMount(){
    axios.get("/user/profile")
      .then(res => {
        const profile = res.data.data;
        this.setState({profile:profile});
        console.log(2,this.state.profile)
      })
  }

  isActive = (pathname) => {
    const location = window.location.pathname === pathname 
    return location ? 'active' :''
  }
  render() {
    const { bgColor, routes, logo } = this.props;
    
    console.log(logo)
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank"
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              <img
                alt={logo.imgAlt}
                className="navbar-brand-img"
                src={smallLogo}
              />
            </NavbarBrand>
          ) : null}
          {/* User */}
          <Nav className="align-items-center d-md-none">
           
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={Avatar}
                    />
                  </span>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!  {this.state.profile.firstName} {this.state.profile.lastName}</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/configuration" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                {/* <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem> */}
                <DropdownItem divider />
                <DropdownItem onClick={this.logoutUser} href="#">
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img alt={logo.imgAlt} src={smallLogo} />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={smallLogo} />
                      </a>
                    )}
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Form */}
            
            {/* Navigation */}
            <Nav navbar>
              <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/index')}`} to="/admin/index">
              <i className="ni ni-chart-bar-32 text-primary"></i>Dashboard</Link>
              </li>
              <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/articles/')}`} to="/admin/articles/">
                <i className="ni ni-book-bookmark text-primary"></i>Articles</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/resources')}`} to="/admin/resources">
                <i className="ni ni-books text-primary"></i>Resources</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/questions')}`} to="/admin/questions">
                <i className="ni ni-send text-primary"></i>Questions</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/faqs')}`} to="/admin/faqs">
                <i className="ni ni-briefcase-24 text-primary"></i>FAQs</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/sponsors')}`} to="/admin/sponsors">
                <i className="ni ni-building text-primary"></i>Sponsors</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/agents')}`} to="/admin/agents">
                <i className="ni ni-single-02 text-primary"></i>Agents</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/partners')}`} to="/admin/partners">
                <i className="ni ni-single-02 text-primary"></i>Partners</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/users')}`} to="/admin/users">
                <i className="ni ni-circle-08 text-primary"></i>Users</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/account-listing-claims')}`} to="/admin/account-listing-claims">
                <i className="ni ni-check-bold text-primary"></i>Account Claims</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/listing-requests')}`} to="/admin/listing-requests">
                <i className="ni ni-circle-08 text-primary"></i>Account Listing</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/licence-verification')}`} to="/admin/licence-verification">
                <i className="ni ni-circle-08 text-primary"></i>License Verification</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/payments')}`} to="/admin/payments">
                <i className="ni ni-circle-08 text-primary"></i>Payments</Link>
                </li>
                {/* {this.createLinks(routes)} */}
        
            </Nav>
           
            {/* Heading */}
               {/* Divider */}
               <hr className="my-3" />
            {/* Navigation */}
            <Nav navbar>
            <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/offshore-team-list')}`} to="/admin/offshore-team-list">
                <i className="ni ni-check-bold text-primary"></i>Offshore Team</Link>
                </li>
            <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/subscribers')}`} to="/admin/subscribers">
                <i className="ni ni-check-bold text-primary"></i>Subscribers</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/contacts')}`} to="/admin/contacts">
                <i className="ni ni-check-bold text-primary"></i>Contact</Link>
                </li>
            <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/configuration')}`} to="/admin/configuration">
                <i className="ni ni-settings text-primary"></i>Config</Link>
                </li>
                <li className="nav-item side-nav">
              <Link className={`nav-link ${this.isActive('/admin/logs')}`} to="/admin/logs">
                <i className="ni ni-spaceship text-primary"></i>Logs</Link>
                </li>
            </Nav> 
            
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired
  })
};

export default Sidebar;
