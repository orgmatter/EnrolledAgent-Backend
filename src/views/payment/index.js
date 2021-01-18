import React,{useState, useEffect} from 'react'
import moment from 'moment';
import axios from '../../redux/axios'
import {useHistory} from 'react-router-dom';
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
    Button,
    UncontrolledTooltip
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
const Payment = () => {
    const [payments, setPayment] = useState([]);

  useEffect(() => { 
    axios.get("payment")
      .then(res => {
        const payments = res.data.data;
        setPayment(payments);
        console.log(res.data.data)
      })
  }, []);
  let history = useHistory();
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
                    Export As CSV or Excel
                  </Button>

                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">Payment Transactions</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>

                      <th scope="col">Agent</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Description</th>
                      <th scope="col">Purpose</th>
                       <th scope="col">Receipt Email</th>
                       <th scope="col">Transaction Date</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(payments)}
                      {
                        payments.map((payment, index)=>(
                        <tr key={index}>                      
                          <td>{payment.agent}</td>
                          <td>{payment.amount}</td>
                          <td>{payment.description}</td>
                          <td>{payment.purpose}</td>
                          <td>{payment.receipt_email}</td>
                          <td>{moment(payment.createdAt).fromNow()}</td>
                         
                         
                          <td className="text-right">
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

export default Payment;
