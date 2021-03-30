import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import ResourceService from "./ResourceService"
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../../redux/axiosInstance';
import Pagination from "react-js-pagination";
// reactstrap components
import {
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,   
    DropdownToggle,
    Button,
    Table,
    Container,
    Row
  } from "reactstrap";
  // core components
import Header from "components/Headers/Header.js";

export default class ListResource extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resources: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    }
    this.deleteResource = this.deleteResource.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  deleteResource(id){
    ResourceService.deleteResource(id).then( res => {
      this.setState({resources: this.state.resources.filter(resource => resource._id !== id)});
      NotificationManager.success('Resource deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    });
  }
   
  componentDidMount() {
    axiosInstance.get('resource')
      .then(response => {
        this.setState({
          resources: response.data.data,
          itemsCountPerPage: response.data.perPage,
          totalItemsCount: response.data.total,
          activePage: response.data.page
        });
    });
  }

  handlePageChange(pageNumber) {
     this.setState({activePage: pageNumber});
    axiosInstance.get('resource?page=' + pageNumber)
        .then(response => {
            this.setState({
                resources: response.data.data,
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
                  <Link to="/admin/resource/create">
                    <Button color="info">
                      Add New Resource +
                    </Button>
                    </Link>
                    <Link style={{float: 'right'}} to="/admin/resource/categories">
                    <Button >
                      Resource Categories
                    </Button>
                  </Link>
                  
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">News &amp; Resources</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Sponsor</th>
                      <th scope="col">Category</th>
                      <th scope="col">Title</th>
                      <th scope="col">Action Link</th>
                      <th scope="col">Action Text</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.resources.map(resource => {
                        return(
                        <tr key={resource._id}>
                          <td>{resource._id}</td>
                          <td>{resource.sponsor.name}</td>
                          <td>{resource.category.name}</td>
                          <td>{resource.title}</td>
                          <td>{resource.actionLink}</td>
                          <td>{resource.actionText}</td>
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
                            <Link  to={`/admin/resource/edit/${resource._id}`}>
                            <DropdownItem
                            >       
                             
                              Edit
                                
                            </DropdownItem>
                            </Link>
                            <DropdownItem
                              href="#!"
                              onClick={ () => this.deleteResource(resource._id)}
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
