import React,{Component} from 'react'
import {Link} from 'react-router-dom'
// React Notification
import { NotificationManager } from 'react-notifications';
import axios from '../../redux/axios/index';
import Pagination from "react-js-pagination";
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
    Table,
    Container,
    Row,
    Button
  } from "reactstrap";
 
  // core components
import Header from "components/Headers/Header.js";
import FaqService from './FaqService';
export default class ListFaq extends Component {

  constructor(props) {
    super(props);
    this.state = {
        faqs: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    }
    this.deleteFaq = this.deleteFaq.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  deleteFaq(id){
    FaqService.deleteFaq(id).then( res => {
      this.setState({faqs: this.state.faqs.filter(faq => faq._id !== id)});
      NotificationManager.success('Faq deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    });
  }
   
  componentDidMount() {
    axios.get('/faq')
      .then(response => {
        this.setState({
          faqs: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
    });
  }

  handlePageChange(pageNumber) {
     this.setState({activePage: pageNumber});
    axios.get('/faq/?page=' + pageNumber)
        .then(response => {
            this.setState({
                faqs: response.data.data,
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
                  <Link to="/admin/faq/create">
                  <Button color="info">
                    Add New Faq +
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
                      <th scope="col">Message</th>
                      <th scope="col">Date Created</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.faqs.map(faq => {
                        return(
                        <tr key={faq._id}>
                        <td>{faq.title}</td>
                        
                        <td> {faq.message.length < 10
                          ? `${faq.messaged}`
                          : `${faq.message.substring(0, 20)}...`}
                          </td>
                        <td>{moment(faq.createdAt).format('MMM-DD-YYYY')}</td>
                      
                          
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
                           
                            <Link  to={`/admin/faq/edit/${faq._id}`}>
                            <DropdownItem
                            >       
                             
                              Edit
                                
                            </DropdownItem>
                            </Link>
                            <DropdownItem
                              href="#!"
                              onClick={ () => this.deleteFaq(faq._id)}
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
