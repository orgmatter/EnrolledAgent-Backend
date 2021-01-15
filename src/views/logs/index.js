import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {getLogs, deleteLog} from '../../redux/_actions/logs/index';
import {Link} from 'react-router-dom'
import moment from 'moment';
import axios from '../../redux/axios/index'
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
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row,
    Button
  } from "reactstrap";

  // core components
import Header from "components/Headers/Header.js";
const Log = () => {
  const dispatch = useDispatch();
    const logs = useSelector((state) => state.logs.logs)
  
  useEffect(() => {
    dispatch(getLogs());
  }, [dispatch]); 

  const [count, setCount] = useState(0);

  const handleDelete = _id => {
  //   axios.delete(`/log/${_id}`).then(res => {
  //     setCount((prevCount) => prevCount + 1)
     
  //  })
    deleteLog(_id);
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
                  <h3 className="mb-0">User Logs</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                
                      <th scope="col">IP</th>
                      <th scope="col">Category</th>
                      <th scope="col">Message</th>
                      <th scope="col">Account</th>
                      <th scope="col">Date Created</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
               
                  {
                        logs.map((log, index)=>(
                        <tr key={index}>
                        <td>{log.ip}</td>
                        <td>{log.category}</td>
                        <td>{log.message}</td>
                        <td>{log.account}</td>
                        <td>{moment(log.createdAt).format('MMM-DD-YYYY')}</td>
                          
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
                              onClick={handleDelete(log._id)}
                            >
                              Delete Log
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

export default Log
