import React, {useEffect, useState} from 'react'
import moment from "moment"
import { useSelector, useDispatch } from "react-redux";
import {getAllSponsors, deleteSponsor} from '../../redux/_actions/sponsors/index'
// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    Button,
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

const ListSponsors = (props) => {
    const dispatch = useDispatch();
    const sponsors = useSelector((state) => state.data)
  
  useEffect(() => {
    dispatch(getAllSponsors(), deleteSponsor());
  }, [dispatch]);

  const onDeleteClick = id => { 
    props.deleteSponsor(id)
    
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
                  <a className="mb-0" href="/admin/sponsor/create">Create New Sponsor</a>
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">List of Sponsors</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Link</th>
                      <th scope="col"> Date Updated </th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(sponsors.data)}
                      {
                        sponsors.data.map((sponsor, index)=>(
                        <tr key={index}>
                          <td>{sponsor._id}</td>
                          <td>{sponsor.name}</td>
                          <td>{sponsor.link}</td>
                          <td> {moment(sponsor.updated_at).format('MMM-DD-YYYY')} </td>
                          <td>
                          <Button color="primary">Edit</Button>{' '}
                          <Button onClick={onDeleteClick.bind(sponsor.id)} color="danger">Delete</Button>{' '}
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
