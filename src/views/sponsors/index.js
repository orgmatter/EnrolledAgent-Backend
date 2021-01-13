import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from '../../redux/axios/index'
import moment from "moment"
import { useSelector, useDispatch } from "react-redux";
import {getAllSponsors, deleteSponsor} from '../../redux/_actions/sponsors/index'
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
    Button,
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

const ListSponsors = () => {
    const dispatch = useDispatch();
    const sponsors = useSelector((state) => state.sponsors.sponsors)

    const [count, setCount] = useState(0);
  
  useEffect(() => {
    dispatch(getAllSponsors());
  }, [dispatch, count]);

  const handleDelete = _id => {
    axios.delete(`/sponsor/${_id}`).then(res => {
      setCount((prevCount) => prevCount + 1)
      //  NotificationManager.success('Sponsor deleted successfully!', 'Success!', 2000);
   })
    
    // deleteSponsor(_id);
    console.log(_id)
  }

  
  
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
                  <Link to="/admin/sponsor/create">
                    <Button color="info">
                      Add New Sponsor +
                    </Button>
                  </Link>
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">News &amp; Sponsors</h3>
                
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Link</th>
                      <th scope="col"> Date Updated </th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(sponsors)}
                      {
                        sponsors.map((sponsor, index)=>(
                        <tr key={index}>
                          <td>{sponsor._id}</td>
                          <td>{sponsor.name}</td>
                          <td>{sponsor.link}</td>
                          <td> {moment(sponsor.createdAt).format('MMM-DD-YYYY')} </td>
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
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Approve/Disapprove
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Edit
                                </DropdownItem>
                                <DropdownItem
                                  href="#!"
                                  onClick={() => handleDelete(sponsor._id)}
                                >
                                  Delete
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                          <td>
                          
                          </td>
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

export default ListSponsors;
