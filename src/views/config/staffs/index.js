import React,{Component} from 'react'
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../../redux/axiosInstance/';
import Pagination from "react-js-pagination";
import {Link} from 'react-router-dom'
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,   
    DropdownToggle,
    Table,
    Container,
    Row
  } from "reactstrap";
import StaffService from './StaffService';

  export default class Staff extends Component {

    constructor(props) {
      super(props);
      this.state = {
          staffs: [],
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3
      }
      this.deleteStaff = this.deleteStaff.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    deleteStaff(id){
      StaffService.deleteStaff(id).then( res => {
        this.setState({staffs: this.state.staffs.filter(staff => staff._id !== id)});
        NotificationManager.success('Staff deleted successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      });
    }
     
    componentDidMount() {
      axiosInstance.get('staff')
        .then(response => {
          this.setState({
            staffs: response.data.data,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total,
            activePage: response.data.current_page
          });
      });
    }
  
    handlePageChange(pageNumber) {
       this.setState({activePage: pageNumber});
      axiosInstance.get('staff?page=' + pageNumber)
          .then(response => {
              this.setState({
                  staffs: response.data.data,
                  itemsCountPerPage: response.data.per_page,
                  totalItemsCount: response.data.total,
                  activePage: response.data.current_page
              });
        });
      }
    render() {
    return (
        <>
       
        {/* Page content */}
        <Container >
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                <Link to="/admin/staffs/create">
                  <Button color="info">
                    Add New Staff +
                  </Button>
                  </Link>
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">List Of Staffs</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.staffs.map(staff => {
                        return(
                        <tr key={staff._id}>
                          <td>{staff.firstName}</td>
                          <td>{staff.lastName}</td>
                          <td>{staff.email}</td>
                          <td>{staff.status}</td>
                      
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
                          
                              <Link  to={`/admin/staff/edit/${staff._id}`}>
                              <DropdownItem
                              >       
                              
                                Edit
                                  
                              </DropdownItem>
                              </Link>
                            
                            <DropdownItem
                              href="#pablo"
                              onClick={ () => this.deleteStaff(staff._id)}
                            >
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                      </tr>
                      )
                    })
                  }
                    
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                  <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass='page-item'
                      linkClass='page-link'
                    />
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
         
        </Container>
      </>
    )
  }
}
