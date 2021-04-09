import React,{useState, useEffect} from "react";
import axios from "../redux/axiosInstance";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { API_URL } from "../config";

const Index = (props) => {

    const [activeNav, setActiveNav] = useState([1]);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const [pages, setPages] = useState([]);

    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
 
  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav({
      activeNav:
      activeNav=== index
    });
    setChartExample1Data({
      chartExample1Data:
    chartExample1Data === "data1" ? "data2" : "data1"
    })
  };
  

  useEffect(() => { 
    axios.get(`${API_URL}/page`)
      .then(res => {
        const pages = res.data.data;
        setPages(pages);
        console.log(3,res.data.data)
      })
  }, []);

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="9">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                      Stats(Last 7 days)
                      </h6>
                      <h2 className="text-white mb-0">Users vs New Users</h2>
                    </div>
                    
                  </Row>
                </CardHeader>
                <CardBody>
                <iframe width="633" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSgSdTbqQr517xna5eKJw547c_DPpL31O396UAvsRrQjbkhcduSlzIpPIor8O7UBgOc4bMd0byG3xtn/pubchart?oid=1226508999&amp;format=interactive"></iframe>
                </CardBody>
              </Card>
            </Col>
            {/* <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Performance
                      </h6>
                      <h2 className="mb-0">Total orders</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  
                   <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div> 
                </CardBody>
              </Card>
            </Col> */}
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Page visits</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Page name</th>
                      <th scope="col">Day</th>
                      <th scope="col">Month</th>
                      <th scope="col">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map((page, index) => (

                    
                    <tr key={index}>
                      <th scope="row">{page.page}</th>
                      <td>{page.day}</td>
                      <td>{page.month}</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        {page.count}
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Col>
            {/* <Col xl="4">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Social traffic</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Referral</th>
                      <th scope="col">Visitors</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Facebook</th>
                      <td>1,480</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <Progress
                              max="100"
                              value="60"
                              barClassName="bg-gradient-danger"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </>
    );
  }


export default Index;
