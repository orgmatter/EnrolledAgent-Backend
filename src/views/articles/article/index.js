import React, { Component } from 'react'
import moment from "moment"
import ArticleService from "./ArticleService"
import {Link} from 'react-router-dom'
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
  // Pagination,
  // PaginationItem,
  // PaginationLink,
  Table,
  Container,
  Row,
  Button
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

export default class ListArticles extends Component {

  constructor(props) {
    super(props);
    this.state = {
        articles: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    }
    this.deleteArticle = this.deleteArticle.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  deleteArticle(id){
    ArticleService.deleteArticle(id).then( res => {
      this.setState({articles: this.state.articles.filter(article => article._id !== id)});
      NotificationManager.success('Artilce deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    });
  }
   
  componentDidMount() {
    axiosInstance.get('news')
      .then(response => {
        this.setState({
          articles: response.data.data,
          itemsCountPerPage: response.data.perPage,
          totalItemsCount: response.data.total,
          activePage: response.data.page
        });
    });
  }

  handlePageChange(pageNumber) {
     this.setState({activePage: pageNumber});
    axiosInstance.get('news?page=' + pageNumber)
        .then(response => {
            this.setState({
                articles: response.data.data,
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
                  <Link to="/admin/article/create">
                  <Button color="info">
                    Add New Article +
                  </Button>
                  </Link>
                  <Link style={{float: 'right'}} to="/admin/article/categories">
                  <Button >
                    Article Categories
                  </Button>
                  </Link>
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">News &amp; Articles</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                
                      <th scope="col">Title</th>
                      <th scope="col">Status</th>
                      <th scope="col">Category</th>
                      <th scope="col">Date Created</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    
                  {
                      this.state.articles.map(article => {
                        return(
                        <tr key={article._id}>
                        <td>{article.title}</td>
                        <td>{article.status}</td>
                        <td>{article.category.name}</td>
                        <td>{moment(article.createdAt).format('MMM-DD-YYYY')}</td>
                      
                          
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
                         
                            <Link  to={`/admin/article/edit/${article._id}`}>
                            <DropdownItem
                            >       
                             
                              Edit
                                
                            </DropdownItem>
                            </Link>
                            <DropdownItem
                              href="#!"
                              onClick={ () => this.deleteArticle(article._id)}
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

