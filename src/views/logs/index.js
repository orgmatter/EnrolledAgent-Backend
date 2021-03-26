import React,{Component} from 'react'
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../redux/axiosInstance';
import Pagination from "react-js-pagination";
import moment from 'moment';
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
import LogService from './LogService';
export default class Log extends Component {

  constructor(props) {
    super(props);
    this.state = {
        logs: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    }
    this.deleteLog = this.deleteLog.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  deleteLog(id){
    LogService.deleteLog(id).then( res => {
      this.setState({logs: this.state.logs.filter(log => log._id !== id)});
      NotificationManager.success('Log deleted successfully !','Success!', 2000);
      window.setTimeout(function(){window.location.reload()}, 700);
    });
  }
   
  componentDidMount() {
    axiosInstance.get('log')
      .then(response => {
        this.setState({
          logs: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
    });
  }

  handlePageChange(pageNumber) {
     this.setState({activePage: pageNumber});
    axiosInstance.get('log?page=' + pageNumber)
        .then(response => {
            this.setState({
                logs: response.data.data,
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
                  <h3 className="mb-0">User Logs</h3>
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
                      this.state.logs.map(log => {
                        return(
                        <tr key={log._id}>
                        <td>{log.ip}</td>
                        <td>{log.category}</td>
                        <td>{log.message}</td>
                        <td>{log.account}</td>
                        <td>{moment(log.createdAt).format('MMM-DD-YYYY')}</td>
                          
                      <td className="text-right">
                        {/* <UncontrolledDropdown>
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
                              onClick={ () => this.deleteLog(log._id)}
                            >
                              Delete Log
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown> */}
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
