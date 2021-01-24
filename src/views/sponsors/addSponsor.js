import React, {Component} from 'react'
import { connect } from 'react-redux';
import {sponsorAdd} from '../../redux/_actions/sponsors/index'

// React Notification
import {NotificationManager} from 'react-notifications';

// reactstrap components
import {
    FormGroup,
    Card,
    FormText,
    CardHeader,
    Form,
    Label,
    Input,
    Button,
    Container,
    Row,
    Col
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";

  export class CreateSponsor extends Component {
    state = {
      link: '',
      name: '',
      avatar: '',
      errors: {}
    };

    onChangeInput = (e) => this.setState({
      [e.target.name] : e.target.value
    })
  
    handleSubmit = (e) =>{
      e.preventDefault();
      
      const { link, name, avatar } = this.state;
  
      //Check for errors
      if(link === ''){
        this.setState({ errors: { name: 'link is required'}});
        return;
      }
      if(name === ''){
        this.setState({ errors: { url: 'name is required'}});
        return;
      }
      if (avatar === '') {
        this.setState({ errors: { avatar: 'avatar is required'}})
      }
      const newSponsor = {
        link,
        name,
        avatar
      }
     
      
      //Submit Category
      this.props.sponsorAdd(newSponsor)
      
      
       //Clear state
       this.setState({
        link: '',
        name: '',
        avatar: '',
        errors: {}
      })
      this.props.history.push('/admin/sponsors');
      NotificationManager.success('Sponsor added!', 'Successful!', 2000);
      
    }

    render() {
      const { link, name, avatar, errors } = this.state;

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
                <h3 className="mb-0">Create Sponsor</h3>
                </CardHeader>
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="link">Link</Label>
                      <Input type="url" name="link" value={link} error={errors.link} onChange={this.onChangeInput} id="link" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Name">Name</Label>
                      <Input type="text" value={name} onChange = {this.onChangeInput} name="name" error={errors.name} id="Name" />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col sm={12}>
                      <Label for="exampleFile">Upload Image</Label>
                      <Input type="file" name="avatar" accept=".png, .jpeg, .jpg" id="exampleFile" />
                      <FormText color="muted">
                          Accepted file types are: png, jpeg or jpg.
                      </FormText>
                    </Col>
                  </FormGroup>
                  
                  <Button onClick={this.handleSubmit} className="btn btn-primary mr-2">Submit</Button>
                </Form>
              </Card>
            </div>
          </Row>
         
        </Container>
        
      </>
        )
      }
    }
 export default connect(null, {sponsorAdd})(CreateSponsor);

