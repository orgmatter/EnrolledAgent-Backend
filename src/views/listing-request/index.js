import React,{Component} from 'react'
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
    Media,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
import ListingService from './ListingService';
  export default class request extends Component {

    constructor(props) {
      super(props);
      this.state = {
          requests: [],
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
                  <h3 className="mb-0">Agent request Request</h3>
                  
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
                          { request.status=="pending" || request.status=="rejected" ? 
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
                            {/* <DropdownItem
                              href="#!"
                              onClick={e => e.preventDefault()}
                            >
                              View
                            </DropdownItem> */}
                            {
                              request.status=="pending" || request.status=="rejected" ?
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
