import React, {Component} from 'react'
import moment from "moment"
import Modal from './Modal';
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../redux/axiosInstance';
import Pagination from "react-js-pagination";
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
    Row
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
import UserService from './UserService';

export default class ListUsers extends Component {

    constructor(props) {
      super(props);
      this.state = {
          isOpen: false,
          error: null,
          users: [],
          userData: {},  
          response: {} ,
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3
      }
      this.deactivateUser = this.deactivateUser.bind(this);
      this.activateUser = this.activateUser.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    deactivateUser(id){
      UserService.deactivateUser(id).then( res => {
        this.setState({users: this.state.users.filter(user => user._id !== id)});
        NotificationManager.success('User deactivated successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      });
    }

    activateUser(id){
      UserService.activateUser(id).then( res => {
        this.setState({users: this.state.users.filter(user => user._id !== id)});
        NotificationManager.success('User activated successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      })
    }

    toggleModal(_id) { 
      axiosInstance.get(`/user/${_id}`).then(response => {
        this.setState({
          userData: response.data.data,
        });
      });

      this.setState({
        isOpen: !this.state.isOpen
      });
  
    }

    
     
    componentDidMount() {
      axiosInstance.get('/user')
        .then(response => {
          this.setState({
            users: response.data.data,
            itemsCountPerPage: response.data.perPage,
            totalItemsCount: response.data.total,
            activePage: response.data.page
          });
      });
    }
  
    handlePageChange(pageNumber) {
       this.setState({activePage: pageNumber});
      axiosInstance.get('/user/?page=' + pageNumber)
          .then(response => {
              this.setState({
                  users: response.data.data,
                  itemsCountPerPage: response.data.perPage,
                  totalItemsCount: response.data.total,
                  activePage: response.data.page
              });
        });
      }
    render() {
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
                  <a className="mb-0" href="/admin/user/upload">Upload New user</a>
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">List of users</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Last Login</th>
                      <th scope="col">Status</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.users.map(user => {
                        return(
                        <tr key={user._id}>
                          <td> {user._id.length < 5
                          ? `${user._id}`
                          : `${user._id.substring(0, 8)}...`}
                          </td>
                         
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{moment(user.lastLogin).fromNow()}</td>
                          {
                            user.isActive === true
                            ?
                            <td><Badge color="success">Active</Badge></td>
                            :
                            <td><Badge color="danger">Deactivated</Badge></td>
                          }
                         
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
                              onClick={ () => this.toggleModal(user._id)}
                            >
                              View
                            </DropdownItem>
                            <DropdownItem
                              href="#!"
                              onClick={e => e.preventDefault()}
                            >
                              Update
                            </DropdownItem>
                            {user.isActive === true ? 
                            <DropdownItem
                              href="#!"
                              onClick={ () => this.deactivateUser(user._id)}
                              
                            >
                              Deactivate
                            </DropdownItem>
                            :
                            <DropdownItem
                            href="#!"
                            onClick={ () => this.activateUser(user._id)}
                          >
                            Acivate
                          </DropdownItem>
                            }
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                      </tr>
                        )
                      })
                    }
                    
                  </tbody>
                </Table>
                <Modal show={this.state.isOpen}  
                  onClose={()=>this.toggleModal(this._id)}>  
                  <Table className="table">  
                    <thead>  
                      <tr className="btn-primary"><th colSpan="2">User Details</th></tr>  
                    </thead>  
                    <tbody>  
          
                      <tr>  
                        <th>First Name </th><td>{this.state.userData.firstName}</td>  
                      </tr> <tr>  
                        <th>Last Name </th><td>{this.state.userData.lastName}</td>  
                      </tr> <tr>  
                        <th>Email  </th><td>{this.state.userData.email}</td>  
                      </tr>
                    </tbody>  
                  </Table>        
                </Modal>  
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
