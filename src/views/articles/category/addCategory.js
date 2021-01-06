import React, {Component} from 'react'
import { connect } from 'react-redux';
import {addArticleCategory} from '../../../redux/_actions/articles/category/index'

// React Notification
import { NotificationManager } from 'react-notifications';

// reactstrap components
import {
    FormGroup,
    Card,
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

  export class addCategory extends Component {
    state = {
      name: '',
      description: '',
      errors: {}
    };

    onChangeInput = (e) => this.setState({
      [e.target.name] : e.target.value
    })
  
    handleSubmit = (e) =>{
      e.preventDefault();
      
      const { name, description } = this.state;
  
      //Check for errors
      if(name === ''){
        this.setState({ errors: { name: 'link is required'}});
        return;
      }
      if (description === '') {
        this.setState({ errors: { description: 'description image is required'} });
      }
      const newPropertySponsor = {
        name,
        description
      }
     
      
      //Submit Category
      this.props.addArticleCategory(newPropertySponsor)
      NotificationManager.success('Blog category added!', 'Successful!', 2000);
      
       //Clear state
       this.setState({
        name: '',
        description: '',
        errors: {}
      })
      this.props.history.push('/admin/article/categories');
      
    }

    render() {
      const { name, description, errors } = this.state;

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
                <h3 className="mb-0">Create Article Category</h3>
                </CardHeader>
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Name">Name</Label>
                      <Input type="text" value={name} onChange = {this.onChangeInput} name="name" error={errors.name} id="Name" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="description">description</Label>
                      <Input type="text" value={description} onChange={this.onChangeInput} error={errors.description} name="description" id="description" />
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
 export default connect(null, {addArticleCategory})(addCategory);

