import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ArticleCategoryService from "./ArticleCategoryService"
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../../redux/axiosInstance/';
import Pagination from "react-js-pagination";

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
    // Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";

export default class ListCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    }
    this.deleteArticleCategory = this.deleteArticleCategory.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  deleteArticleCategory(id){
    ArticleCategoryService.deleteArticleCategory(id).then( res => {
      this.setState({categories: this.state.categories.filter(category => category._id !== id)});
      NotificationManager.success('Artilce Category deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    });
  }
   
  componentDidMount() {
    axiosInstance.get('category/article')
      .then(response => {
        this.setState({
          categories: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
    });
  }

  handlePageChange(pageNumber) {
     this.setState({activePage: pageNumber});
    axiosInstance.get('category/article?page=' + pageNumber)
        .then(response => {
            this.setState({
                categories: response.data.data,
                itemsCountPerPage: response.data.per_page,
                totalItemsCount: response.data.total,
                activePage: response.data.current_page
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
                  <Link to="/admin/article/category/create">
                    <Button color="info">
                      Add New Category +
                    </Button>
                  </Link>
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">Aricle &amp; Categories</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Slug</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.categories.map(category => {
                        return(
                        <tr key={category._id}>
                        <td>{category._id}</td>
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
                          
                              <Link  to={`/admin/article/category/edit/${category._id}`}>
                              <DropdownItem
                              >       
                              
                                Edit
                                  
                              </DropdownItem>
                              </Link>
                              <DropdownItem
                                href="#!"
                                onClick={ () => this.deleteArticleCategory(category._id)}
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
