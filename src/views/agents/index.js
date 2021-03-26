import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import moment from "moment"
import Modal from './Modal';
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../redux/axiosInstance/';
import Pagination from "react-js-pagination";
// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,   
    DropdownToggle,
    Media,
    
    Table,
    Container,
    Row,
    UncontrolledTooltip
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
import AgentService from './AgentService';

  export default class ListAgent extends Component {

    constructor(props) {
      super(props);
      this.state = {
          isOpen: false,
          error: null,
          agents: [],
          agentData: {},  
          response: {} ,
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3
      }
      this.deleteAgent = this.deleteAgent.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    deleteAgent(id){
      AgentService.deleteAgent(id).then( res => {
        this.setState({agents: this.state.agents.filter(agent => agent._id !== id)});
        NotificationManager.success('A deleted successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      });
    }

    toggleModal(_id) { 
      axiosInstance.get("/agent" + '/' + _id).then(response => {
        this.setState({
          agentData: response.data.data,
        });
      });

      this.setState({
        isOpen: !this.state.isOpen
      });
  
    }
     
    componentDidMount() {
      axiosInstance.get('/agent')
        .then(response => {
          this.setState({
            agents: response.data.data,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total,
            activePage: response.data.current_page
          });
      });
    }
  
    handlePageChange(pageNumber) {
       this.setState({activePage: pageNumber});
      axiosInstance.get('/agent/?page=' + pageNumber)
          .then(response => {
              this.setState({
                  agents: response.data.data,
                  itemsCountPerPage: response.data.per_page,
                  totalItemsCount: response.data.total,
                  activePage: response.data.current_page
              });
        });
      }

      
    render() {
    return (
        <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <a className="mb-0" href="/admin/agent/upload">Upload New Agent</a>
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">List of agents</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Country</th>
                      <th scope="col">Zip code</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.agents.map(agent => {
                        return(
                        <tr key={agent._id}>
                          <td>{agent._id}</td>
                          <td>{agent.firstName}</td>
                          <td>{agent.lastName}</td>
                          <td>{agent.country}</td>
                          <td>{agent.zipcode}</td>
                          {
                            agent.isClaimed==true ?
                          <td><Badge color="success">Claimed</Badge></td>  
                            : 
                           <td> <Badge color="danger">Not yet Claimed</Badge></td>
                          }

                          <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                              href="#!"
                              onClick={ () => this.toggleModal(agent._id)}
                            >
                              
                            
                              View
                            </DropdownItem>
                            
                           
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        
                      </td>
                      </tr>
                        )
                      })
                    }
                    
                  </tbody>
                </Table>
                <Modal show={this.state.isOpen}  
                  onClose={()=>this.toggleModal(this._id)}>  
                  <Table className="table">  
                    <thead>  
                      <tr className="btn-primary"><th colSpan="2">Agent Details</th></tr>  
                    </thead>  
                    <tbody>  
          
                      <tr>  
                        <th>First Name </th><td>{this.state.agentData.firstName}</td>  
                      </tr> <tr>  
                        <th>Last Name </th><td>{this.state.agentData.lastName}</td>  
                      </tr> <tr>  
                        <th>Mobile No  </th><td>{this.state.agentData.phone}</td>  
                      </tr> <tr>  
                        <th>Address  </th><td>{this.state.agentData.address1}</td>  
                      </tr> <tr>  
                        <th>ZipCode  </th><td>{this.state.agentData.zipcode}</td>  
                      </tr>  
                      <tr>  
                        <th>Company Name  </th><td>{this.state.agentData.CompanyName}</td>  
                      </tr>   
                      <tr>  
                        <th>Country  </th><td>{this.state.agentData.country}</td>  
                      </tr>  
                      <tr>  
                        <th>State  </th><td>{this.state.agentData.state}</td>  
                      </tr>  
                      <tr>  
                        <th>City  </th><td>{this.state.agentData.city}</td>  
                      </tr>  
                    </tbody>  
                  </Table>        
                </Modal>  
                <CardFooter className="py-4">
                  <nav aria-label="...">
                  <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass='page-item'
                      linkClass='page-link'
                    />
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>

        
      </>
    )
  }
}
