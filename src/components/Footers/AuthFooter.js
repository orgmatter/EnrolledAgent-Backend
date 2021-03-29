
/*eslint-disable*/
import { BASE_URL } from "../../config";
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="py-5">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="6">
                <div className="copyright text-center text-xl-left text-muted">
                  © 2020{" "}
                  <a
                    className="font-weight-bold ml-1"
                    href={BASE_URL}
                    target="_blank"
                  >
                    EnrolledAgent.com
                  </a>
                </div>
              </Col>
              <Col xl="6">
                <Nav className="nav-footer justify-content-center justify-content-xl-end">
                  <NavItem>
                    <NavLink
                      href="https://facebook.com"
                      target="_blank"
                    >
                      Facebook
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://instagram.com"
                      target="_blank"
                    >
                      Instagram
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com"
                      target="_blank"
                    >
                      Twitter
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://linkedin.com"
                      target="_blank"
                    >
                      Linkedin
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;
