import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moment from "moment"
// React Notification
import { NotificationManager } from 'react-notifications';
import axiosInstance from '../../redux/axiosInstance';
import Pagination from "react-js-pagination";

import Avatar from "../../assets/img/avatar.jpg"

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
    FormGroup,
    Row
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
import SponsorService from './SponsorService';

  export default class ListSponsors extends Component {

    constructor(props) {
      super(props);
      this.state = {
          sponsors: [],
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3,
          search: ''
      }
      this.deleteSponsor = this.deleteSponsor.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    deleteSponsor(id){
      SponsorService.deleteSponsor(id).then( res => {
        this.setState({sponsors: this.state.sponsors.filter(sponsor => sponsor._id !== id)});
        NotificationManager.success('Sponsor deleted successfully !','Success!', 2000);
        window.setTimeout(function(){window.location.reload()}, 700);
      });
    }
     
    componentDidMount() {
      axiosInstance.get('/sponsor')
        .then(response => {
          this.setState({
            sponsors: response.data.data,
            itemsCountPerPage: response.data.perPage,
            totalItemsCount: response.data.total,
            activePage: response.data.page
          });
      });
    }
  
    handlePageChange(pageNumber) {
       this.setState({activePage: pageNumber});
       var query  = this.state.search === '' ? `/sponsor/?page=${pageNumber}` : `/sponsor/?search=${this.state.search}&page=${pageNumber}`
     
       axiosInstance.get(query)
          .then(response => {
              this.setState({
                  sponsors: response.data.data,
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
        var query  = search === '' ? `/sponsor` : `/sponsor/?search=${search}`
        
         axiosInstance.get(query)
           .then(response => {
               this.setState({
                   sponsors: response.data.data,
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
                  <Link to="/admin/sponsor/create">
                    <Button color="info">
                      Add New Sponsor +
                    </Button>
                  </Link>
                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">News &amp; Sponsors
                  <FormGroup style={{float: 'right'}}>
                      <input type="text"  className="form-control" onChange={ (e) => this.handleSearchChange(e) } placeholder="Search here"/>
                  </FormGroup>
                  </h3>
                
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Link</th>
                      <th scope="col">Avatar</th>
                      <th scope="col"> Date Updated </th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                  {
                      this.state.sponsors.map(sponsor => {
                        return(
                        <tr key={sponsor._id}>
                          <td>{sponsor._id}</td>
                          <td>{sponsor.name}</td>
                          <td>{sponsor.link}</td>
                          <td><img style={{ width: "100%",borderRadius: "50%" }} src={sponsor.avatar || Avatar } alt="avatar"></img></td>
                          <td> {moment(sponsor.createdAt).format('MMM-DD-YYYY')} </td>
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
                                <Link  to={`/admin/sponsor/edit/${sponsor._id}`}>
                                <DropdownItem
                                >
                                  Edit
                                </DropdownItem>
                                <DropdownItem 
                                  href="#!"
                                  onClick={ () => this.deleteSponsor(sponsor._id)}
                                >
                                  Delete
                                </DropdownItem>
                                </Link>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                          <td>  
                          
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
