import React,{useState, useEffect} from "react";
import axios from "redux/axiosInstance";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { API_URL } from "../../config";

const Header = () => {
  const [analytic, setAnalytic] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => { 
    setLoading(true)
    axios.get(`${API_URL}/analytic`)
    .then(res => res.data)
      .then(res => {
        setLoading(false)
        const analytic = res.data;
        setAnalytic(analytic);
        console.log(res.data)
      })
      .catch(e => setLoading(false))
  }, []);
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Agents
                          </CardTitle>
                          {!loading ? (
                          <span className="h2 font-weight-bold mb-0">
                           {analytic.totalAgents}
                          </span>
                          ) : (
                          <span className="blinking">
                          
                          </span>
                          )}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            New users
                          </CardTitle>
                          {!loading ? (
                           <span className="h2 font-weight-bold mb-0">
                           {analytic.newUsers5Days}
                           </span>
                          ) : (
                          <span className="blinking">
                          
                          </span>
                          )}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-chart-pie" />
                          </div>
                        </Col>
                      </Row>
                      
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Sales
                          </CardTitle>
                          {!loading ? (
                          <span className="h2 font-weight-bold mb-0">
                             {analytic.totalPayments}
                          </span>
                          ) : (
                          <span className="blinking">
                          
                          </span>
                          )}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h6"
                            className="text-uppercase text-muted mb-0"
                          >
                            Subscribers
                          </CardTitle>
                          
                          {!loading ? (
                          <span className="h2 font-weight-bold mb-0">
                          {analytic.mailingList}
                          </span>
                          ) : (
                          <span className="blinking">
                          
                          </span>
                          )}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                     
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }


export default Header;
