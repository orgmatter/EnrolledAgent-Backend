import React,{Component} from 'react'
import Modal from './Modal';
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../redux/axiosInstance';
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
    FormGroup,
    Row
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
import ClaimService from './ClaimService';
  export default class Claims extends Component {

    constructor(props) {
      super(props);
      this.state = {
          isOpen: false,
          error: null,
          listings: [],
          listingData: {},  
          response: {} ,
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3,
          search:''
      }
      this.rejectClaim = this.rejectClaim.bind(this);
      this.approveClaim = this.approveClaim.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    rejectClaim(id){
      ClaimService.rejectClaim(id).then( res => {
        this.setState({listings: this.state.listings.filter(list => list._id !== id)});
        NotificationManager.success('Claim rejected successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      }).catch(error => {
        NotificationManager.error(error?.response?.data?.error.message ?? "An Error occured.",'Error!', 2000);
      })
    }

    approveClaim(id){
      ClaimService.approveClaim(id).then( res => {
        this.setState({listings: this.state.listings.filter(list => list._id !== id)});
        NotificationManager.success('Claim approved successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      }).catch(error => {
        NotificationManager.error(error?.response?.data?.error.message ?? "An Error occured.",'Error!', 2000);
      })
    }

    toggleModal(_id) { 
      axiosInstance.get(`/claim/${_id}`).then(response => {
        this.setState({
          listingData: response.data.data,
        });
        console.log(response.data)
      });
      this.setState({
        isOpen: !this.state.isOpen
      });
  
    }

    
     
    componentDidMount() {
      axiosInstance.get('/claim')
        .then(response => {
          this.setState({
            listings: response.data.data,
            itemsCountPerPage: response.data.perPage,
            totalItemsCount: response.data.total,
            activePage: response.data.page
          });
      });
    }
  
    handlePageChange(pageNumber) {
       this.setState({activePage: pageNumber});
       var query  = this.state.search === '' ? `/claim/?page=${pageNumber}` : `/claim/?search=${this.state.search}&page=${pageNumber}`
   
       axiosInstance.get(query)
          .then(response => {
              this.setState({
                  listings: response.data.data,
                  itemsCountPerPage: response.data.perPage,
                  totalItemsCount: response.data.total,
                  activePage: response.data.page
              });
        });
      }

      handleSearchChange(e) {
        var search = e.target.value;
        this.setState({
          search: search
        })
        var query  = search === '' ? `/claim` : `/claim/?search=${search}`
        
         axiosInstance.get(query)
           .then(response => {
               this.setState({
                   listings: response.data.data,
                   itemsCountPerPage: response.data.perPage,
                   totalItemsCount: response.data.total,
                   activePage: response.data.page
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
                  <h3 className="mb-0">List of Account Claims
                  <FormGroup style={{float: 'right'}}>
                      <input type="text"  className="form-control" onChange={ (e) => this.handleSearchChange(e) } placeholder="Search here"/>
                  </FormGroup>
                  </h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Users First Name</th>
                      <th scope="col">Users Last Name</th>
                      <th scope="col">Agents First Name</th>
                      <th scope="col">Agents Last Namee</th>
                      <th scope="col">Role</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  
                  {
                      this.state.listings.map(listing => {
                        return(
                          listing ?
                        <tr key={listing._id}>
                          
                        
                          <td>{listing._id}</td>
                       
                          <td>{listing.user.firstName}</td>
                          <td>{listing.user.lastName}</td>
                          <td>{listing.agent.firstName}</td>
                          <td>{listing.agent.lastName}</td>
                          <td>{listing.jobRole}</td>
                          { listing.status === "pending" || listing.status === "rejected" ? 
                           <td>
                           <Badge color="danger">{listing.status}</Badge>
                           </td>
                           : 
                           <td>
                           <Badge color="success">{listing.status}</Badge>
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
                              onClick={ () => this.toggleModal(listing._id)}
                            >
                              View
                            </DropdownItem>
                            {
                              listing.status === "pending" || listing.status === "rejected" ?
                              <div>

                            <DropdownItem
                              href="#!"
                              onClick={ () => this.approveClaim(listing._id)}
                            >
                              Approve
                            </DropdownItem>
                          
                              </div>
                            
                            
                            :

                            <DropdownItem
                              href="#!"
                              onClick={ () => this.rejectClaim(listing._id)}
                            >
                              Reject / Cancel Approval
                            </DropdownItem>
                            }
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                      </tr>
                     : 
                          <tr>
                            No Data
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
                      <tr className="btn-primary"><th colSpan="2">Listing Details</th></tr>  
                    </thead>  
          { this.state.listingData.agent && this.state.listingData.user && (
                    <tbody>  
                      <tr>  
                        <th>Agents Name </th><td>{this.state.listingData.agent.firstName} {this.state.listingData.agent.lastName}</td>  
                      </tr> <tr>  
                        <th>Users Name </th><td>{this.state.listingData.user.firstName} {this.state.listingData.user.lastName}</td>  
                      </tr> 
                      <tr>  
                        <th>Users Email  </th><td>{this.state.listingData.user.email}</td>  
                      </tr>
                      <tr>  
                        <th>Status  </th><td>{this.state.listingData.status}</td>  
                      </tr>
                      <tr>  
                        <th>Job Role  </th><td>{this.state.listingData.jobRole}</td>  
                      </tr>
                      <tr>  
                        <th>Company Size  </th><td>{this.state.listingData.companySize}</td>  
                      </tr>
                      <tr>  
                        <th>Company Name  </th><td>{this.state.listingData.companyName}</td>  
                      </tr>
                      <tr>  
                        <th>Company Revenue  </th><td>{this.state.listingData.companyRevenue}</td>  
                      </tr>
                      <tr>  
                        <th>Organization Type  </th><td>{this.state.listingData.organizationType}</td>  
                      </tr>
                      <tr>  
                        <th>Annual Tax  </th><td>{this.state.listingData.annualTax}</td>  
                      </tr>
                    </tbody>  
          )}
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
