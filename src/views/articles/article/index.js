import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {getArticles, deleteArticle} from '../../../redux/_actions/articles/article';
import moment from "moment";

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
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row,
    Button
  } from "reactstrap";
 
  // core components
import Header from "components/Headers/Header.js";
const ListArticles = (props) => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles.articles)
    // console.log(articles);
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const handleDelete = id => {
    deleteArticle(id);
    console.log(id)
  }
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
                      <th scope="col">Author</th>
                      <th scope="col">Status</th>
                      <th scope="col">Date Created</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(articles)}
                      {
                        articles.map((article, index)=>(
                        <tr key={index}>
                        <td>{article.title}</td>
                        <td>{article.author}</td>
                        <td>{article.status}</td>
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
                              onClick={() => dispatch(deleteArticle(article._id))}
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
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
         
        </Container>
        </>
    )
}

export default ListArticles;
