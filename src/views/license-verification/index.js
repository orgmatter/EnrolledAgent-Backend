import React,{useState, useEffect} from 'react'
import moment from 'moment';
import axiosInstance from '../../redux/axiosInstance'
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
    Table,
    Container,
    Row,
    Button,
    UncontrolledTooltip
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
const License = () => {
    const [license, setLicense] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10)

  useEffect(() => { 
    axiosInstance.get("verification")
      .then(res => {
        const license = res.data.data;
        setLicense(license);
        console.log(res.data.data)
      })
  }, []);

  //Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  const headers = [
    { label: "ID", key: "_id" },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "City", key: "city" },
    { label: "State", key: "state" },
    { label: "Zip Code", key: "zipcode" },
    { label: "Agent Email", key: "agentEmail" },
    { label: "Agent First Name", key: "agentFirstName" },
    { label: "Agent Last Name", key: "agentLastName" },
    { label: "Agent City", key: "agentCity" },
    { label: "Agent Zip Code", key: "agentZipcode" },
    { label: "Agent Phone", key: "agentPhone" },
    { label: "Agent State", key: "agentstate" },
    { label: "Licence", key: "licence" },
    { label: "Message", key: "message" },
    { label: "Preferred Contact", key: "preferredContact" },
    { label: "Transaction", key: "transaction" },
    { label: "Created At", key: "createdAt" },
    { label: "Updated At", key: "updatedAt" },
  ];

  const csvReport = {
    data: license,
    headers: headers,
    filename: 'License_Verification_Report.csv'
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
                  <h3 className="mb-0">License Verification List</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>

                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">City</th>
                       <th scope="col">State</th>
                       <th scope="col">Zipcode</th>
                       <th scope="col">Agent's Name</th>
                      <th scope="col">Agent's Email</th>
                       <th scope="col">Agent's City</th>
                       <th scope="col">Agent's Zipcode</th>
                       <th scope="col">Agent's Phone</th>
                       <th scope="col">Agent's State</th>
                       <th scope="col">Agent's License</th>
                       <th scope="col">Message</th>
                       <th scope="col">Contact By</th>
                       <th scope="col">Received On</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(license)}
                      {
                        license.map((lic, index)=>(
                        <tr key={index}>                      
                          <td>{lic.firstName} {lic.lastName}</td>
                          <td>{lic.email}</td>
                          <td>{lic.phone}</td>
                          <td>{lic.city}</td>
                          <td>{lic.state}</td>
                          <td>{lic.zipcode}</td>
                          <td>{lic.agentEmail}</td>
                          <td>{lic.agentFirstName} {lic.lastFirstName}</td>
                          <td>{lic.agentCity}</td>
                          <td>{lic.agentZipcode}</td>
                          <td>{lic.agentPhone}</td>
                          <td>{lic.agentstate}</td>
                          <td>{lic.licence}</td>
                          <td>{lic.message}</td>
                          <td>{lic.preferredContact}</td>
                          <td>{moment(lic.createdAt).fromNow()}</td>
                         
                         
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
                        
                           
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                      </tr>
                        ))
                      }
                    
                  </tbody>
                </Table>
                <Pagination dataPerPage={dataPerPage} totalData={license.length} paginate={paginate} />
              </Card>
            </div>
          </Row>
         
        </Container>  
        </>
    )
}

export default License;
