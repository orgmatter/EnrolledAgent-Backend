
import React,{useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import {userLogout} from '../../redux/_actions/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from "../../redux/axiosInstance";
import Avatar from "../../assets/img/avatar.jpg"
// reactstrap components 
import {
  DropdownMenu,
  DropdownItem, 
  UncontrolledDropdown,
  DropdownToggle, 
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

const AdminNavbar = (props,{logout}) => {

  const [profile, setProfile] = useState([]);

  useEffect(() => { 
    axios.get("/user/profile")
      .then(res => {
        const profile = res.data.data;
        setProfile(profile);
        console.log(res.data.data)
      })
  }, []);
  let history = useHistory();
  
  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/")
  }
  return (
    <>
    <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
      <Container fluid>
        <Link
          className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
          to="/"
        >
          {props.brandText}
        </Link>
        <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          <FormGroup className="mb-0">
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Search" type="text" />
            </InputGroup>
          </FormGroup>
        </Form>
        <Nav className="align-items-center d-none d-md-flex" navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle className="pr-0" nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={Avatar}
                  />
                </span>
                <Media className="ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm font-weight-bold">
                  
                    {profile.firstName} {profile.lastName}
                  </span>
                </Media>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!  {profile.firstName} {profile.lastName}</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/configuration" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
           
              <DropdownItem divider />
              <DropdownItem onClick={logoutUser} href="#">
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
       
      </Container>
    </Navbar>
  </>
  )
}
AdminNavbar.propTypes = {
  auth: PropTypes.func.isRequired,
}


export default connect(null, {userLogout})(AdminNavbar);
