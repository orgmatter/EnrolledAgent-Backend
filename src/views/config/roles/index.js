import React,{Component} from 'react'
// React Notification
import { NotificationManager } from 'react-notifications';
import axios from '../../../redux/axios/index';
import Pagination from "react-js-pagination";
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
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
  } from "reactstrap";
import RoleService from './RoleService';

  export default class Role extends Component {

    constructor(props) {
      super(props);
      this.state = {
          roles: [],
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3
      }
      this.deleteRole = this.deleteRole.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    deleteRole(id){
      RoleService.deleteRole(id).then( res => {
        this.setState({roles: this.state.roles.filter(role => role._id !== id)});
        NotificationManager.success('Role deleted successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      });
    }
     
    componentDidMount() {
      axios.get('role')
        .then(response => {
          this.setState({
            roles: response.data.data,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total,
            activePage: response.data.current_page
          });
      });
    }
  
    handlePageChange(pageNumber) {
       this.setState({activePage: pageNumber});
      axios.get('role?page=' + pageNumber)
          .then(response => {
              this.setState({
                  roles: response.data.data,
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
                  
                  {
                      this.state.roles.map(role => {
                        return(
                        <tr key={role._id}>

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
                              onClick={ () => this.deleteRole(role._id)}
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
