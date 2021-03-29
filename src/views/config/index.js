import React,{useState} from 'react'
import {  } from 'reactstrap';
import classnames from 'classnames';
// reactstrap components
import {
    Container,
    Row,
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink, 
    Col
  } from "reactstrap";
  // core components
import Header from "components/Headers/Header";
import Staff from "./staffs/index"
import Role from "./roles/index"
import Payment from "./payment/index";

const Config = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
  }
    return (
        <>
        <Header />
        <Container className="" fluid>
            <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Staff
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Roles
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Payment Information
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <Staff/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
             <Role />
            </Col>
        
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
             <Payment />
            </Col>
        
          </Row>
        </TabPane>
      </TabContent>
      </Container>
        </>
    )
}

export default Config;
