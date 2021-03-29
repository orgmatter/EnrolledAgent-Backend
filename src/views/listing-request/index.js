import React,{Component} from 'react'
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../redux/axiosInstance/';
import Pagination from "react-js-pagination";
import { CSVLink } from "react-csv";
import Modal from './Modal';

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
    Table,
    Container,
    Row
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
import ListingService from './ListingService';
  export default class request extends Component {

    constructor(props) {
      super(props);
      this.state = {
          isOpen: false,
          error: null,
          requests: [],
          requestData: {},  
          response: {} ,
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3
      }
      this.rejectListing = this.rejectListing.bind(this);
      this.approveListing = this.approveListing.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    rejectListing(id){
      ListingService.rejectListing(id).then( res => {
        this.setState({requests: this.state.requests.filter(request => request._id !== id)});
        NotificationManager.success('Listing rejected successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      });
    }

    approveListing(id){
      ListingService.approveListing(id).then( res => {
        this.setState({requests: this.state.requests.filter(request => request._id !== id)});
        try{
  
          NotificationManager.success('Listing approved successfully !','Success!', 2000);
          window.setTimeout(function(){window.location.reload()}, 700);
        }
        
        catch(error){
          alert(error?.response?.data?.error.message ?? error.message)
          NotificationManager.success('An error occured','Error!', 2000);
          window.setTimeout(function(){window.location.reload()}, 700);
        }
        
      })
    }

    toggleModal(_id) { 
      axiosInstance.get(`/listing-request/${_id}`).then(response => {
        this.setState({
          requestData: response.data.data,
        });
      });

      this.setState({
        isOpen: !this.state.isOpen
      });
  
    }

    
     
    componentDidMount() {
      axiosInstance.get('/listing-request')
        .then(response => {
          this.setState({
            requests: response.data.data,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total,
            activePage: response.data.current_page
          });
      });
    }

    fetchData = () => {
      axiosInstance.get('/listing-request/'+this.props.id).then(requests => {
          console.log(requests);
        this.setState({ requests:requests.data.data, }, () => {
          // click the CSVLink component to trigger the CSV download
          this.csvLink.current.link.click()
        })
      })
    }
  
    handlePageChange(pageNumber) {
       this.setState({activePage: pageNumber});
      axiosInstance.get('/listing-request/?page=' + pageNumber)
          .then(response => {
              this.setState({
                  requests: response.data.data,
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
                  
                  <Button onClick={this.fetchData} style={{float: 'right'}} color="info">
                    <CSVLink data={this.state.requests} ref={this.csvLink} filename={'listing-request.csv'}>Export to CSV</CSVLink>
                  </Button>

                </CardHeader>
              
                <CardHeader className="border-0">
                  <h3 className="mb-0">Agent Request</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Agent Name </th>
                      <th scope="col">Agent Email </th>
                      <th scope="col">Agent Phone </th>
                      <th scope="col">Agent City </th>
                      <th scope="col">Agent State </th>
                      <th scope="col">Agent Country </th>
                      <th scope="col">Agent Licence </th>
                      <th scope="col">Position</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.requests ?
                      this.state.requests.map(request => {
                        return(
                          
                        <tr key={request._id}>
                          <td>{request.firstName} {request.lastName}</td>
                          <td>{request.email}</td>
                          <td>{request.phone}</td>
                            <td>{request.city}</td>
                            <td>{request.state}</td>
                            <td>{request.country}</td>
                            <td>{request.licence}</td>
                            <td>{request.position}</td>
                          { request.status === "pending" || request.status === "rejected" ? 
                           <td>
                           <Badge color="danger">{request.status}</Badge>
                           </td>
                           : 
                           <td>
                           <Badge color="success">{request.status}</Badge>
                           </td>
                           
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
                              onClick={ () => this.toggleModal(request._id)}
                            >
                              View
                            </DropdownItem>
                            {
                              request.status === "pending" || request.status === "rejected" ?
                              <div>

                            <DropdownItem
                              href="#!"
                              onClick={ () => this.approveListing(request._id)}
                             
                            >
                              Approve
                            </DropdownItem>
                          
                              </div>
                            
                            
                            :

                            <DropdownItem
                              href="#!"
                              onClick={ () => this.rejectListing(request._id)}
                            >
                              Reject / Cancel Approval
                            </DropdownItem>
                            }
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                      </tr>
                  
                     )})
                     :
                     <div>No Data</div>
                    }
                  

                  </tbody>
                </Table>
                <Modal show={this.state.isOpen}  
                  onClose={()=>this.toggleModal(this._id)}>  
                  <Table className="table">  
                    <thead>  
                      <tr className="btn-primary"><th colSpan="2">Listing Details</th></tr>  
                    </thead>  
                    <tbody>  
          
                      <tr>  
                        <th>First Name </th><td>{this.state.requestData.firstName}</td>  
                      </tr> <tr>  
                        <th>Last Name </th><td>{this.state.requestData.lastName}</td>  
                      </tr> 
                      <tr>  
                        <th>Email  </th><td>{this.state.requestData.email}</td>  
                      </tr>
                      <tr>  
                        <th>Phone  </th><td>{this.state.requestData.phone}</td>  
                      </tr>
                      <tr>  
                        <th>Fax  </th><td>{this.state.requestData.fax}</td>  
                      </tr>
                      <tr>  
                        <th>City  </th><td>{this.state.requestData.city}</td>  
                      </tr>
                      <tr>  
                        <th>State  </th><td>{this.state.requestData.state}</td>  
                      </tr>
                      <tr>  
                        <th>Country  </th><td>{this.state.requestData.country}</td>  
                      </tr>
                      <tr>  
                        <th>ZipCode  </th><td>{this.state.requestData.zipcode}</td>  
                      </tr>
                      <tr>  
                        <th>Address 1  </th><td>{this.state.requestData.address1}</td>  
                      </tr>
                      <tr>  
                        <th>Address 2  </th><td>{this.state.requestData.address2}</td>  
                      </tr>
                      <tr>  
                        <th>Title  </th><td>{this.state.requestData.title}</td>  
                      </tr>
                      <tr>  
                        <th>Website  </th><td>{this.state.requestData.website}</td>  
                      </tr>
                      <tr>  
                        <th>Bio  </th><td>{this.state.requestData.bio}</td>  
                      </tr>
                      <tr>  
                        <th>Status  </th><td>{this.state.requestData.status}</td>  
                      </tr>
                      <tr>  
                        <th>Licence  </th><td>{this.state.requestData.licence}</td>  
                      </tr>
                      <tr>  
                        <th>Position  </th><td>{this.state.requestData.position}</td>  
                      </tr>
                      <tr>  
                        <th>State Licenced  </th><td>{this.state.requestData.stateLicenced}</td>  
                      </tr>
                      <tr>  
                        <th>Licence Proof  </th><td>{this.state.requestData.licenceProof}</td>  
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
