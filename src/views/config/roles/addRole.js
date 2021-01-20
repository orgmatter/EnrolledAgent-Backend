import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { addRole } from '../../../redux/_actions/config/role/index';
import axios from '../../../redux/axios/index';


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
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addRole } from 'redux/_actions/resources/index.js';

const AddRole = props => {

  const roles = useSelector(store => store.roles.roles, shallowEqual);
  const dispatch = useDispatch();

  /* Submit New Article */
  const handleSubmit = e =>  {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      const formData = new FormData(form);
      dispatch(addRole(formData));
      props.history.push("/admin/configuration/");
    }
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
                <h3 className="mb-0">Create New Role</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit} >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Title</Label>
                      <Input type="text" name="title" required  id="title" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Action Link</Label>
                      <Input type="link" name="actionLink" required  id="actionLink" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Action Text</Label>
                      <Input type="text" name="actionText" required  id="actionText" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="category">Category</Label>

                        <Input type="select" 
                            required
                            className="mr-sm-2"
                            name="category"
                          >
                            <option value=""></option>
                            {catOptions}
                        </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="sponsor">Sponsor</Label>

                        <Input type="select" 
                            required
                            className="mr-sm-2"
                            name="sponsor"
                          >
                            <option value=""></option>
                            {sponsorOptions}
                        </Input>
                    </Col>
                  </FormGroup>
                
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Body">Body</Label>
                     
                      <Editor
                            initialValue="<p>This is the initial content of the editor</p>"
                            init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                            }}
                            onEditorChange={handleEditorChange}
                            id="body"
                        />
                    </Col>
                  </FormGroup>
              
                  <FormGroup>
                    <Col sm={12}>
                  <Button type="submit" className="btn btn-primary mr-2">Submit</Button>
                  </Col>
                    </FormGroup>
                </Form>
              </Card>
            </div>
          </Row>
         
        </Container>
      
      </>
    )
  }


export default AddRole;
