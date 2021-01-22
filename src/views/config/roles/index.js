import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getRoles,deleteRole} from '../../../redux/_actions/config/role/index';
import moment from 'moment';
import {Link} from 'react-router-dom'
// reactstrap components
import {
  Badge,
  Button,
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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

const Role = (props) => {
  const dispatch = useDispatch();
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  const roles = useSelector((state) => state.roles.roles)
  
    useEffect(() => {
      dispatch(getRoles());
    }, [dispatch]);
    return (
        <>
             {/* Page content */}
        <Container >
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                <Link to="/admin/roles/create">
                  <Button color="info">
                    Add New Role +
                  </Button>
                  </Link>
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">List Of Roles</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Date Created</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  
                    {console.log(roles)}
                    {
                    roles.map((role, index)=>(

                   
                        <tr key={index}>

                          <td>{role.name}</td>
                          <td>{role.status}</td>
                          <td>{moment(role.createdAt).format('MMM-DD-YYYY')}</td>
    
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
                              Edit
                            </DropdownItem>               
                            <DropdownItem
                              href="#!"
                              onClick={() => dispatch(deleteRole(role._id))}
                            >
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
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

export default Role
