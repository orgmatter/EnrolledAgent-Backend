import React,{useState, useEffect} from 'react'
import moment from 'moment';
import axiosInstance from '../../redux/axiosInstance'
import { CSVLink } from "react-csv";
import Pagination from "./Pagination";
// reactstrap components
import { 
    Card,
    CardHeader,
    Table,
    Container,
    Row,
    Button
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
const Offshore = () => {
    const [lists, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10)

  useEffect(() => { 
    axiosInstance.get("offshore")
      .then(res => {
        const lists = res.data.data;
        setList(lists);
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
    { label: "Business Size", key: "businessSize" },
    { label: "Staff Needed", key: "staffNeeded" },
    { label: "Hire Ugency", key: "hireUrgency" },
    { label: "Message", key: "message" },
    { label: "Preferred Contact", key: "preferredContact" },
    { label: "Created At", key: "createdAt" },
    { label: "Updated At", key: "updatedAt" },
  ];

  const csvReport = {
    data: lists,
    headers: headers,
    filename: 'OffShore_TeamLIst_Report.csv'
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
                  <h3 className="mb-0">Off Shore Team List</h3>
                  
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
                       <th scope="col">Business Size</th>
                       <th scope="col">Staff Needed</th>
                       <th scope="col">Hire Urgency</th>
                       <th scope="col">Prefered Contact</th>
                      <th scope="col">Date Sent</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(lists)}
                      {
                        lists.map((list, index)=>(
                        <tr key={index}>                      
                          <td>{list.firstName} {list.lastName}</td>
                          <td>{list.email}</td>
                          <td>{list.phone}</td>
                          <td>{list.city}</td>
                          <td>{list.state}</td>
                          <td>{list.zipcode}</td>
                          <td>{list.businessSize}</td>
                          <td>{list.staffNeeded}</td>
                          <td>{list.hireUrgency}</td>
                          <td>{list.preferredContact}</td>
                          <td>{moment(list.createdAt).fromNow()}</td>
                         
                         
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
                <Pagination dataPerPage={dataPerPage} totalData={lists.length} paginate={paginate} />
              </Card>
            </div>
          </Row>
         
        </Container>  
        </>
    )
}

export default Offshore;
