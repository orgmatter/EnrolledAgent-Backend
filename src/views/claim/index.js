import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getClaims} from '../../redux/_actions/agents/index';
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
const Claims = () => {
  const dispatch = useDispatch();
    const listings = useSelector((state) => state.listings.listings)
  
  useEffect(() => {
    dispatch(getClaims());
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
                      <th scope="col">Agent</th>
                      <th scope="col">Role</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {console.log("Listing:" . listings ? listings : "No data")}
                      {
                        listings.map((listing, index)=>(
                        listing ?  
                        <tr key={index} >
                          <td>{listing._id}</td>
                          <td>{listing.user.email}</td>
                          <td>{listing.user.lastName}</td>
                          <td>{listing.agent.firstName}</td>
                          <td>{listing.jobRole}</td>
                          { listing.status=="pending" ? 
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
                              listing.status=="pending" ?
                              <div>

                            <DropdownItem
                              href="#!"
                              onClick={e => e.preventDefault()}
                            >
                              Approve
                            </DropdownItem>
                            <DropdownItem
                              href="#!"
                              onClick={e => e.preventDefault()}
                            >
                              Reject
                            </DropdownItem>
                              </div>
                            
                            
                            :

                            <DropdownItem
                              href="#!"
                              onClick={e => e.preventDefault()}
                            >
                              Cancel Approval
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
                     ))
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

export default Claims;
