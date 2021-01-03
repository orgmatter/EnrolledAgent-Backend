import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import axios from "../../redux/axios";
import { setUserSession } from "../../Utils/Common";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
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
  
const Login = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //console.log(data);
    handleLogin(data);
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // handle button click of login form
  const handleLogin = (data) => {
    setError("");
    setLoading(true);
    axios
      .post("/login", data)
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/admin/index");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401) {
          setError(() => "Invalid login details");
        } else setError("Something went wrong. Please try again later.");
      });
  };
    return (
        <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
          
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email"
                    name="email" 
                    ref={register({ required: true })}
                    autoComplete="new-password"
                    />
                    <br />
                    {errors.email && (
                      <small style={{ color: "red" }}>E-mail is required</small>
                    )}
                    <br />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password"
                    name="password"
                    ref={register({ required: true })}
                    autoComplete="new-password"
                    />
                    <br />
                    {errors.password && (
                      <small style={{ color: "red" }}>Password is required</small>
                    )}
                    <br />   
                    {error && (
                      <>
                        <small style={{ color: "red" }}>{error}</small>
                        <br />
                      </>
                    )}
                    <br />
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
                  <Input className="my-4" color="primary" type="submit" value={loading ? "Loading..." : "Login"} />
                   
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

export default Login
