import React,{useState, useEffect, useRef} from 'react'
import axios from 'redux/axios/index'
import {
  BrowserRouter as Router,
  Switch,
  useLocation, 
  Redirect,
  Link,
  useHistory
} from "react-router-dom";

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

// React Notification
import { NotificationManager } from 'react-notifications';

const eye = <FontAwesomeIcon icon={faEye} />;



const Login = (props) => {
     
      const [passwordShown, setPasswordShown] = useState(false);
      const [formData, setFormData] = useState({
        password: '', 
        confirm_password: '',
        token: props.match.params.token
      });

      const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
      
    
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
      
    const body = JSON.stringify(formData);
    const config = {
        headers: { 
            'Content-Type': 'application/json',
            'apikey': 'fsdjkahdgjknsdfhvbjknsdjfbglksvajkbhdkgncvb'
        }
    }
      const handleSubmit = e => {
        e.preventDefault();
        axios.post("/reset-password", body, config )
          .then(res => {
            if (res.status === 200) {
              history.push("/");
              NotificationManager.success("Password Changed Successfully",'Success!', 2000);
            }
          })
          .then(res => {
            history.replace(from);
          })
          .catch(error => {
            console.error("Password Reset error:", error);
            NotificationManager.error(`${error?.response?.data?.error.message ?? error.message}`,'Error!', 2000);
          });
      };
    return (
        <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
          
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Enter your new password</small>
              </div>
              <Form role="form" onSubmit={handleSubmit}>
             
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password"
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    onChange={e => handleChange(e)}
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

                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password"
                    name="confirmpassword"
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
              
                <div className="text-center">
                  <Button  className="my-4" color="primary" type="submit">Submit</Button>
                   
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <Link to="/auth/login">
               
                <small>Cancel Reset</small>
              </Link>
            </Col>
          
          </Row>
        </Col>
      </>
    )
}


export default Login;

