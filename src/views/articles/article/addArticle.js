import React, {Component} from 'react'
//import {addArticleCategory} from '../../../redux/_actions/articles/category/index'

// React Notification
import { NotificationManager } from 'react-notifications';
import { Editor } from '@tinymce/tinymce-react';
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
    Col,
    FormText
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";

  const addArticle = () => {
    
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
                <h3 className="mb-0">Create New Article</h3>
                </CardHeader>
                <Form  >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Title</Label>
                      <Input type="text" name="title"  id="title" />
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
                            name="body" 
                            id="body"
                        />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                  <Col sm={12}>
                    <Label for="exampleFile">Upload Image</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        Accepted file types are: png, jpeg or jpg.
                    </FormText>
                    </Col>
                    </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                  <Button className="btn btn-primary mr-2">Submit</Button>
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
 export default addArticle;

