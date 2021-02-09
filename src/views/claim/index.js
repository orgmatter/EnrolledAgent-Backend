import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import moment from "moment"
// React Notification
import { NotificationManager } from 'react-notifications';
import axios from '../../redux/axiosInstance/index';
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
import ClaimService from './ClaimService';
  export default class Claims extends Component {

    constructor(props) {
      super(props);
      this.state = {
          listings: [],
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3
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
      });
    }

    approveClaim(id){
      ClaimService.approveClaim(id).then( res => {
        this.setState({listings: this.state.listings.filter(list => list._id !== id)});
        NotificationManager.success('Claim approved successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      })
    }

    
     
    componentDidMount() {
      axios.get('/claim')
        .then(response => {
          this.setState({
            listings: response.data.data,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total,
            activePage: response.data.current_page
          });
      });
    }
  
    handlePageChange(pageNumber) {
       this.setState({activePage: pageNumber});
      axios.get('/claim/?page=' + pageNumber)
          .then(response => {
              this.setState({
                  listings: response.data.data,
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
                  <h3 className="mb-0">List of Account Claims</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Agent</th>
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
                       
                          <td>{listing.agent.firstName}</td>
                          <td>{listing.agent.lastName}</td>
                          <td>{listing.jobRole}</td>
                          { listing.status=="pending" || listing.status=="rejected" ? 
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
                              onClick={e => e.preventDefault()}
                            >
                              View
                            </DropdownItem>
                            {
                              listing.status=="pending" || listing.status=="rejected" ?
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
