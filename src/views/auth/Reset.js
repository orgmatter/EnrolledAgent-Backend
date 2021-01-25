import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  useLocation, 
  Redirect,
  Link
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
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = ({login, isAuthenticated}) => {
     
      const [passwordShown, setPasswordShown] = useState(false);
   

      
    
      const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
 
    return (
        <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
          
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form role="form" onSubmit={e => onSubmit(e)}>
             
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
                  <Button className="my-4" color="primary" type="submit">Submit</Button>
                   
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <Link to="/auth/login">
                <Button className="my-4" color="primary">Submit</Button>
                <small>Cancel Reset</small>
              </Link>
            </Col>
          
          </Row>
        </Col>
      </>
    )
}


export default Login;
