
import React,{useEffect, useState} from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import {useDispatch} from 'react-redux';
import axios from "../../redux/axios";
import Avatar from "../../assets/img/avatar.png"
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
//import {updateProfile} from '';

const Profile = () => {
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
   const dispatch = useDispatch();

   /* Update Profile */
  const handleSubmit = e =>  {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      const formData = new FormData(form);
      //dispatch(updateProfile(formData));
      <Redirect to="/admin/user-profile/" />
    }
  }
    return (
      <> 
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={Avatar}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                    {profile.firstName} {profile.lastName}
                      {/* <span className="font-weight-light">, 27</span> */}
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {profile.email}
                    </div>
                 
                    <div>
                      <i className="ni education_hat mr-2" />
                      Account Type: {profile.accountType}
                    </div>
              
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#!"
                        onClick={handleSubmit}
                        size="sm"
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <h6 className="heading-small text-muted mb-4" >
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue= {profile.accountType}
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder= {profile.email}
                              type="email"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name" 
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue= {profile.firstName}
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue= {profile.lastName}
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Change Password
                    </h6>
                    <div className="pl-lg-4">
                     
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="current-password"
                            >
                              Current Password
                            </label>
                            <Input
                              className="form-control-alternative"
                               
                              id="input-password"
                              placeholder="Current Password"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              New Password
                            </label>
                            <Input
                              className="form-control-alternative"
                              
                              id="new-password"
                              placeholder="New Password"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-password"
                            >
                              Confirm Password
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="confirm-pwd"
                              placeholder="Confirm Password"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }


export default Profile;
