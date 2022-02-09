import React, { useRef} from 'react'

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
    Col
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import { useDispatch  } from 'react-redux';

import { addFaq } from 'redux/_actions/faq/index.js';

  const AddFaq = props => {

    
    const dispatch = useDispatch();
    const body = useRef("");


    // Description field update
    const handleEditorChange = content => {
      body.current = content;
    }

  /* Submit New Article */
  const handleSubmit = e =>  {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    if (body.current?.length < 30){
      alert("Faq message Content is too short or empty");
    }
    else if (form.checkValidity()) {
      const formData = new FormData(form);
      formData.append("message", body.current);
      dispatch(addFaq(formData));
      props.history.push("/admin/faqs/");
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
                <h3 className="mb-0">Create New Faq</h3>
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
                      <Label for="Message">Message</Label>
                     
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
                            id="message"
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
 export default AddFaq;

