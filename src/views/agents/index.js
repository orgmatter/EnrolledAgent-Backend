import React, {Component } from 'react';
import Modal from './Modal';
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../redux/axiosInstance/';
import Pagination from "react-js-pagination";
// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,   
    DropdownToggle,
    Table,
    Container,
    Row,
    FormGroup
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
import AgentService from './AgentService';
import LoadingShow from '../../components/LoadingShow'

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
          search: '',
          loading:false,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 5
      }
      this.deleteAgent = this.deleteAgent.bind(this);
      this.toggleStatus = this.toggleStatus.bind(this)
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    deleteAgent(id){
      AgentService.deleteAgent(id).then( res => {
        this.setState({agents: this.state.agents.filter(agent => agent._id !== id)});
        NotificationManager.success('Agent deleted successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      });
    }

    toggleStatus(id){
      // alert(id);return;
      AgentService.toggleStatus(id).then( res => {
        this.setState({agents: this.state.agents.filter(agent => agent._id !== id)});
        NotificationManager.success('Agent status changed successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      });
    }

    toggleModal(_id) { 
      axiosInstance.get(`/agent/${_id}`).then(response => {
        this.setState({
          agentData: response.data.data,
        });
      });

      this.setState({
        isOpen: !this.state.isOpen
      });
  
    }
     
    componentDidMount() {
      this.setState({loading: true })
      axiosInstance.get('/agent')
        .then(response => {
          this.setState({
            agents: response.data.data,
            itemsCountPerPage: response.data.perPage,
            totalItemsCount: response.data.total,
            activePage: response.data.page,
            loading: false
          })
      })
      .catch(e => this.setState({loading: false }));
    }
  
    handlePageChange(pageNumber) {
       this.setState({activePage: pageNumber, loading: true});
       var query  = this.state.search === '' ? `/agent/?page=${pageNumber}` : `/agent/?search=${this.state.search}&page=${pageNumber}`
        
       axiosInstance.get(query)
          .then(response => {
              this.setState({
                  agents: response.data.data,
                  itemsCountPerPage: response.data.perPage,
                  totalItemsCount: response.data.total,
                  activePage: response.data.page,
                  loading: false
              });
        })
        .catch(e => this.setState({loading: false }));
      }
      handleSearchChange(e) {
        var search = e.target.value;
        this.setState({
          search: search,
          loading: true
        })
        var query  = search === '' ? `/agent/` : `/agent/?search=${search}`
     
         axiosInstance.get(query)
           .then(response => {
               this.setState({
                   agents: response.data.data,
                   itemsCountPerPage: response.data.perPage,
                   totalItemsCount: response.data.total,
                   activePage: response.data.page,
                   loading: false
               });
         })
         .catch(e => this.setState({loading: false }));
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
                  <h3 className="mb-0">List of agents  
                  <FormGroup style={{float: 'right'}}>
                  <input type="text"  className="form-control" onChange={ (e) => this.handleSearchChange(e) } placeholder="Search here"/>
                    </FormGroup>
                    </h3>
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
                      <th scope="col">Active</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                     !this.state.loading ? (this.state.agents.length === 0 ? <tr dangerouslySetInnerHTML={{__html: LoadingShow('No result found ','7')}} /> : this.state.agents.map(agent => {
                        return(
                        <tr key={agent._id}>
                          <td>{agent._id}</td>
                          <td>{agent.firstName}</td>
                          <td>{agent.lastName}</td>
                          <td>{agent.country}</td>
                          <td>{agent.zipcode}</td>
                          {
                            agent.isClaimed === true ?
                          <td><Badge color="success">Claimed</Badge></td>  
                            : 
                           <td> <Badge color="danger">Not yet Claimed</Badge></td>
                          }
                          {
                            agent.isActive === false ?
                          <td><Badge color="danger">Inactive</Badge></td>  
                            : 
                           <td> <Badge color="success">Active</Badge></td>
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
                            {
                                agent.isActive === false ?
                              <div>

                            <DropdownItem
                              href="#!"
                              onClick={ () => this.toggleStatus(agent._id)}
                            >
                              Activate
                            </DropdownItem>
                          
                              </div>
                            
                            
                            :

                            <DropdownItem
                              href="#!"
                              onClick={ () => this.toggleStatus(agent._id)}
                            >
                              Deactivate
                            </DropdownItem>
                            }
                            
                           
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        
                      </td>
                      </tr>
                        )
                      })) : (
                        
                        <tr dangerouslySetInnerHTML={{__html: LoadingShow('Loading...','7')}} />
                      )
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
