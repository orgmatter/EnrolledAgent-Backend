import React,{useState, useEffect} from 'react'
import moment from 'moment';
import axiosInstance from '../../redux/axiosInstance'
import { CSVLink } from "react-csv";
// reactstrap components
import { 
    Badge,
    Button,
    Card,
    CardHeader,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
const Subscribers = () => {
    const [subscribers, setSub] = useState([]);

  useEffect(() => { 
    axiosInstance.get("email-list")
      .then(res => {
        const subscribers = res.data.data;
        setSub(subscribers);
        console.log(res.data.data)
      })
  }, []);

  const headers = [
    { label: "ID", key: "_id" },
    { label: "Subscription", key: "unsubscribed" },
    { label: "Email", key: "email" },
    { label: "Date Subscribed", key: "createdAt" }
  ];

  const csvReport = {
    data: subscribers,
    headers: headers,
    filename: 'Subscribers_List_Report.csv'
  };
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
                  
                  <Button style={{float: 'right'}} color="info">
                    <CSVLink {...csvReport}>Export to CSV</CSVLink>
                  </Button>

                </CardHeader>
            
                <CardHeader className="border-0">
                  <h3 className="mb-0">List of subscribed users</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Subscription</th>
                      <th scope="col">Email</th>
                      <th scope="col">Date Subscribed</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(subscribers)}
                      {
                        subscribers.map((subscriber, index)=>(
                        <tr key={index}>                      
                          <td>{subscriber._id}</td>
                          {
                            subscriber.unsubscribed === false
                            ?
                            <td><Badge color="success">Active Subscription</Badge></td>
                            :
                            <td><Badge color="danger">Inactive Subscription</Badge></td>
                          }
                          <td>{subscriber.email}</td>
                          <td>{moment(subscriber.createdAt).fromNow()}</td>
                         
                         
                          {/* <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#!"
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
                            <DropdownItem
                              href="#!"
                              onClick={e => e.preventDefault()}
                            >
                              Update
                            </DropdownItem>
                           
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td> */}
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

export default Subscribers;
