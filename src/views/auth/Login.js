import React,{useState} from 'react'
import { useHistory, useLocation, Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PropTypes from 'prop-types';
import {login} from '../../redux/_actions/auth';

// reactstrap components
import {
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Button
  } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = ({login, isAuthenticated}) => {

      const [passwordShown, setPasswordShown] = useState(false);
      const [formData, setFormData] = useState({});
      const loggedIn = !!localStorage.getItem("token");
    
      let history = useHistory();
      let location = useLocation();
    
      let { from } = location.state || { from: { pathname: "/" } };
    
      const handleChange = e => {
        e.persist(); 
        setFormData(prevState => { 
          return {
            ...prevState,
            [e.target.name]: e.target.value
          };
        });
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        fetch("https://api.enrolledagent.org/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb'
          }, 
          credentials: "include",
          body: JSON.stringify(formData)
        })
          .then(res => {
            if (res.status === 401) {
              alert("Your session expired or you don't have admin rights");
              localStorage.removeItem("token");
              history.push("/");
            }
            return res.json();
          })
          .then(res => {
            localStorage.setItem("token", res.token);
            history.replace(from);
          }) 
          .catch(err => {
            console.error("Login error:", err);
          });
       // localStorage.setItem("token", res.data.token );
        history.replace(from);
      };
      const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
  
    return loggedIn ? (
      <Redirect
        to={{
          pathname: "/admin/index",
          state: { from: location }
        }}
      />  
    ) :(
        <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
          
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email"
                    name="email" 
                    value={formData.email || ""}
                    onChange={handleChange}
                    required
                    />
                   
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password"
                    name="password"
                    value={formData.password || ""}
                    onChange={handleChange}
                    type={passwordShown ? "text" : "password"}
                    required
                    />
                    <i 
                    style={{
                      position: 'absolute',
                      top: '25%',
                      right: '10%',
                      cursor: 'pointer'
                    }} 
                    onClick={togglePasswordVisiblity}>
                      {eye}
                      </i>
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">Submit</Button>
                   
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <Link to="/auth/password/reset">
       
                <small>Forgot password?</small>
              </Link>
            </Col>
          
          </Row>
        </Col>
      </>
    )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps, {login})(Login);
