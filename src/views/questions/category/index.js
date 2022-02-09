import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {getQuestionsCategories, deleteQuestionCategory} from '../../../redux/_actions/questions/category/index'
// reactstrap components
import {
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
    Button,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";

const ListQuestionCategories = () => {
    const dispatch = useDispatch();
    const quecategories = useSelector((state) => state.quecategories.quecategories)
  
  useEffect(() => {
    dispatch(getQuestionsCategories());
  }, [dispatch]);


 
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
                  <Link to="/admin/question/category/create">
                    <Button color="info">
                      Add New Category +
                    </Button>
                  </Link>
                 
                </CardHeader>
                <CardHeader className="border-0">
                <h3 className="mb-0">Question Categories</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                      {
                        quecategories.map((category, index)=>(
                        <tr key={index}>
                        <td>{category._id}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        
                          
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
                          <Link  to={`/admin/question/category/edit/${category._id}`}>
                            <DropdownItem
                            >        
                             
                              Edit
                                
                            </DropdownItem>
                            </Link>
                            <DropdownItem
                              
                              onClick={() => dispatch(deleteQuestionCategory(category._id))}
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

export default ListQuestionCategories;
