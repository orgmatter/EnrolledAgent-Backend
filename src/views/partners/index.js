import React,{Component} from 'react'
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../redux/axiosInstance';
import Pagination from "react-js-pagination";
import moment from 'moment';
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
    Row    
  } from "reactstrap";

  // core components
import Header from "components/Headers/Header.js";
import PartnerService from './PartnerService';
export default class Partner extends Component {

  constructor(props) {
    super(props);
    this.state = {
        partners: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    }
    this.deletePart = this.deletePart.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  deletePart(id){
    PartnerService.deletePartner(id).then( res => {
      this.setState({partners: this.state.partners.filter(part => part._id !== id)});
      NotificationManager.success('Partner deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    });
  }
   
  componentDidMount() {
    axiosInstance.get('partner')
      .then(response => {
        this.setState({
          partners: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
    });
  }

  handlePageChange(pageNumber) {
     this.setState({activePage: pageNumber});
    axiosInstance.get('partner?page=' + pageNumber)
        .then(response => {
            this.setState({
                partners: response.data.data,
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
                  <h3 className="mb-0">List Partners</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                
                      <th scope="col">IP</th>
                      <th scope="col">Category</th>
                      <th scope="col">Message</th>
                      <th scope="col">Account</th>
                      <th scope="col">Date Created</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
               
                  {
                      this.state.partners.map(part => {
                        return(
                        <tr key={part._id}>
                        <td>{part.ip}</td>
                        <td>{part.category}</td>
                        <td>{part.message}</td>
                        <td>{part.account}</td>
                        <td>{moment(part.createdAt).format('MMM-DD-YYYY')}</td>
                          
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
                              href="#!"
                              onClick={ () => this.deletePart(part._id)}
                            >
                              Delete part
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
