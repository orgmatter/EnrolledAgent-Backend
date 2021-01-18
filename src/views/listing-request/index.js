import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getListing, approveListing, rejectListing} from '../../redux/_actions/agents/index';

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
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
const Listing = () => {
  const dispatch = useDispatch();
    const requests = useSelector((state) => state.requests.requests)
  
  useEffect(() => {
    dispatch(getListing());
  }, [dispatch]);
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
                  <h3 className="mb-0">Agent Listing Request</h3>
                  
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
                  {console.log("Requests:" . requests ? requests : "No data")}
                      {
                          requests ?  
                        requests.map((request, index)=>(
                        
                        <tr key={index} >
                          <td>{request._id}</td>
                       
                          <td>{request.agent.firstName}</td>
                          <td>{request.agent.lastName}</td>
                          <td>{request.jobRole}</td>
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
                            <DropdownItem
                              href="#!"
                              onClick={e => e.preventDefault()}
                            >
                              View
                            </DropdownItem>
                            {
                              request.status=="pending" || request.status=="rejected" ?
                              <div>

                            <DropdownItem
                              href="#!"
                              onClick={() => dispatch(approveListing(request._id))}
                            >
                              Approve
                            </DropdownItem>
                          
                              </div>
                            
                            
                            :

                            <DropdownItem
                              href="#!"
                              onClick={() => dispatch(rejectListing(request._id))}
                            >
                              Reject / Cancel Approval
                            </DropdownItem>
                            }
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                      </tr>
                  
                     ))
                     :
                     <div>No Data</div>
                    }

                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
         
        </Container>
        </>
    )
}

export default Listing;
