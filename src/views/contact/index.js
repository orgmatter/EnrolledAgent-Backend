import React,{useState, useEffect} from 'react'
import moment from 'moment';
import axios from '../../redux/axios'
import {useHistory} from 'react-router-dom';
import { CSVLink } from "react-csv";
import Pagination from "./Pagination";
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
    Button,
    UncontrolledTooltip
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
const Contact = () => {
    const [contacts, setContact] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10)

  useEffect(() => { 
    axios.get("contact")
      .then(res => {
        const contacts = res.data.data;
        setContact(contacts);
        console.log(res.data.data)
      })
  }, []);

  //Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  const headers = [
    { label: "ID", key: "_id" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Subject", key: "subject" },
    { label: "Message", key: "message" },
    { label: "Phone", key: "phone" },
    { label: "Created At", key: "createdAt" },
    { label: "Updated At", key: "updatedAt" },
  ];

  const csvReport = {
    data: contacts,
    headers: headers,
    filename: 'Contact_List_Report.csv'
  };

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
                    <CSVLink {...csvReport}>Export to CSV</CSVLink>
                  </Button>

                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">Contact List</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>

                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Message</th>
                       <th scope="col">Phone</th>
                       <th scope="col">Recieved</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(contacts)}
                      {
                        contacts.map((contact, index)=>(
                        <tr key={index}>                      
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.subject}</td>
                          <td>{contact.message}</td>
                          <td>{contact.phone}</td>
                          <td>{moment(contact.createdAt).fromNow()}</td>
                         
                         
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
                <Pagination dataPerPage={dataPerPage} totalData={contacts.length} paginate={paginate} />
              </Card>
            </div>
          </Row>
         
        </Container>  
        </>
    )
}

export default Contact;
