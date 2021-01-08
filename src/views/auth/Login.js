import React,{useState} from 'react'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Redirect
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
    Col
  } from "reactstrap";
  
const Login = ({login, isAuthenticated}) => {
      const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
      const {email, password} = formData;
      const onChange = e => 
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
      const onSubmit = async e => {
          e.preventDefault();
          login(email,password);
      }
      if(isAuthenticated){
        return <Redirect to="/admin/article/categories" />
      }
    return (
        <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
          
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form role="form" onSubmit={e => onSubmit(e)}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email"
                    name="email" 
                    value={email}
                    onChange={e => onChange(e)}
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
                    <Input placeholder="Password" type="password" 
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    />
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
                  <Input className="my-4" value="submit" color="primary" type="submit"/>
                   
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
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
