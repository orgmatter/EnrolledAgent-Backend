import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getAgents} from '../../redux/_actions/agents/index';
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
  // core components
  import Header from "components/Headers/Header.js";

const ListAgent = (props) => {

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
    
    const agents = useSelector((state) => state.agents.agents)
 
    useEffect(() => {
      dispatch(getAgents());
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
                      <th scope="col">Country</th>
                      <th scope="col">Zip code</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(agents)}
                      {
                        agents.map((agent, index)=>(
                        <tr key={index}>
                          <td>{agent.id}</td>
                          <td>{agent.firstName}</td>
                          <td>{agent.lastName}</td>
                          <td>{agent.country}</td>
                          <td>{agent.zipcode}</td>
                          {
                            agent.isClaimed==true ?
                          <td><Badge color="success">Claimed</Badge></td>  
                            : 
                           <td> <Badge color="danger">Not yet Claimed</Badge></td>
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
                              onClick={toggle}
                            >
                              View
                            </DropdownItem> */}
                            <DropdownItem
                              href="#!"
                              onClick={e => e.preventDefault()}
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
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <Button color="success" onClick={toggleNested}>Show Nested Modal</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </>
    )
}

export default ListAgent;
