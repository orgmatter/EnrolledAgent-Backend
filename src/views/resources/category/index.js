import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ResourceCategoryService from "./ResourceCategoryService"
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
    Table,
    Container,
    Row,
    FormGroup,
    Button,
  } from "reactstrap";
  // core components
import Header from "components/Headers/Header.js";

export default class ListResourceCategories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rescategories: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3,
        search:''
    }
    this.deleteResourceCat = this.deleteResourceCat.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  deleteResourceCat(id){
    ResourceCategoryService.deleteResourceCat(id).then( res => {
      this.setState({rescategories: this.state.rescategories.filter(category => category._id !== id)});
      NotificationManager.success('Resource Category deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    });
  }
   
  componentDidMount() {
    axiosInstance.get('/category/resource')
      .then(response => {
        this.setState({
          rescategories: response.data.data,
          itemsCountPerPage: response.data.perPage,
          totalItemsCount: response.data.total,
          activePage: response.data.page
        });
    });
  }

  handlePageChange(pageNumber) {
     this.setState({activePage: pageNumber});
     var query  = this.state.search === '' ? `/category/resource?page=${pageNumber}` : `/category/resource?search=${this.state.search}&page=${pageNumber}`
      
    axiosInstance.get(query)
        .then(response => {
            this.setState({
                rescategories: response.data.data,
                itemsCountPerPage: response.data.perPage,
                totalItemsCount: response.data.total,
                activePage: response.data.page
            });
      });
    }
    handleSearchChange(e) {
      var search = e.target.value;
      this.setState({
        search: search
      })
      var query  = search === '' ? `/category/resource` : `/category/resource/?search=${search}`
      
       axiosInstance.get(query)
         .then(response => {
             this.setState({
                rescategories: response.data.data,
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
                  <Link to="/admin/resource/category/create">
                    <Button color="info">
                      Add New Category +
                    </Button>
                  </Link>
                 
                </CardHeader>
                <CardHeader className="border-0">
                <h3 className="mb-0">News &amp; Resource Categories
                  <FormGroup style={{float: 'right'}}>
                        <input type="text"  className="form-control" onChange={ (e) => this.handleSearchChange(e) } placeholder="Search here"/>
                  </FormGroup>
                </h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Slug</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.rescategories.map(category => {
                        return(
                        <tr key={category._id}>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>{category.slug}</td>
                      
                          
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
                            <Link  to={`/admin/resource/category/edit/${category._id}`}>
                            <DropdownItem
                            >       
                             
                              Edit
                                
                            </DropdownItem>
                            </Link>
                            <DropdownItem
                              href="#!"
                              onClick={ () => this.deleteResourceCat(category._id)}
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
