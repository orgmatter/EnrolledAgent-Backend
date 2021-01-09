import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResourceAdd } from '../../../redux/_actions/resources/index';
import { Editor } from '@tinymce/tinymce-react';
import Select from 'react-select';
import {availableSponsors} from '../../api'

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

export class addResource extends Component {
  state = {
    sponsor: '',
    category: '',
    title: '',
    body: '',
    actionLink: '',
    actionText: '',
    errors: {}
  };

  onChangeInput = (e) => this.setState({
    [e.target.name] : e.target.value
  })

  handleSubmit = (e) =>{
    e.preventDefault();
    
    const { sponsor, category, title, body, actionLink, actionText } = this.state;

    //Check for errors
    if(sponsor === ''){
      this.setState({ errors: { sponsor: 'Sponsor is required'}});
      return;
    }
    if(category === ''){
      this.setState({ errors: { category: 'Category is required'}});
      return;
    }
    if(title === ''){
      this.setState({ errors: { title: 'Title is required'}});
      return;
    }
    if(body === ''){
      this.setState({ errors: { body: 'Body is required'}});
      return;
    }
    if(actionLink === ''){
      this.setState({ errors: { actionLink: 'Action Link is required'}});
      return;
    }
    if(actionText === ''){
      this.setState({ errors: { actionText: 'Action Text is required'}});
      return;
    }
    const newPropertyCategory = {
      sponsor, category, title, body, actionLink, actionText
    }
   
    
    //Submit Category
    this.props.ResourceAdd(newPropertyCategory)
    NotificationManager.success('Resource added!', 'Successful!', 2000);
    
     //Clear state
     this.setState({
      sponsor: '',
      category: '',
      title: '',
      body: '',
      actionLink: '',
      actionText: '',
      errors: {}
    })
    this.props.history.push('/admin/index');
    
  }
  
  render() {
  const { sponsor, category, title, body, actionLink, actionText, errors } = this.state;

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
                <h3 className="mb-0">Create Resource</h3>
                </CardHeader>
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup>
                  <Col sm={12}>
                    <Label for="exampleSelect" sm={2}>Select Sponsor</Label>
                    <Input type="select" error={errors.sponsor} onChange={this.onChangeInput} value={sponsor} name="sponsor" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="exampleSelect" sm={2}>Select Category</Label>
                      <Input type="select" error={errors.category} onChange={this.onChangeInput} value={category} name="category" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup> 
                    <Col sm={12}>
                      <Label for="title" sm={2}>Title</Label>
                      <Input type="text" error={errors.title} onChange={this.onChangeInput} value={title} name="title" id="title" />
                    </Col>
                  </FormGroup>

                  <FormGroup> 
                    <Col sm={12}>
                      <Label for="body">Body</Label>
                      <div className="col-sm-12">
                          <Editor
                            initialValue="<p>Enter Body Description</p>"
                            init={{
                              height: 250,
                              menubar: false,
                              plugins: [
                                'advlist autosave autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                              ],
                              toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                            }}
                            onEditorChange={this.handleEditorChange}
                            name="body"
                            value={body}
                            error={errors.body} 
                            
                          />
                        </div>
                    </Col>
                  </FormGroup>

                  <FormGroup> 
                    <Col sm={12}>
                      <Label for="actionLink" sm={2}>Action Link</Label>
                      <Input type="url" value={actionLink} name="actionLink" id="actionLink" />
                    </Col>
                  </FormGroup>

                  <FormGroup> 
                    <Col sm={12}>
                      <Label for="actionText" sm={2}>Action Text</Label>
                      <Input type="text" value={actionText} name="actionText" id="actionText" />
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

export default connect(null, {ResourceAdd})(addResource);
