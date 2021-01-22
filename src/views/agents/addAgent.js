import React,{useEffect, useRef} from 'react'
import {Redirect} from 'react-router-dom';
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

  import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addAgent } from 'redux/_actions/agents/index.js';

  const AddAgent = props => {


    const dispatch = useDispatch();
    const bio = useRef("");

    // Description field update
    const handleEditorChange = content => {
      bio.current = content;
    }

  /* Submit New Article */
  const handleSubmit = e =>  {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (bio.current?.length < 30){
      alert("Biography Content is too short or empty");
    }
     else if (form.checkValidity()) {
      const formData = new FormData(form);
      formData.append("bio", bio.current);
      dispatch(addAgent(formData));
      <Redirect to="/admin/agents/" />
    }
  }
    return (
        <>
     
        {/* Page content */}

            <div className="col">
              <Card className="">
              <CardHeader className="border-0">
                <h3 className="mb-0">Create New Agent</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit} >
                  <FormGroup>
                    <Col className="row">

                    <Col md={6}>
                      <Label for="Title">First Name</Label>
                      <Input type="text" name="firstName" required  id="firstName" />
                    </Col>
                    <Col md={6}>
                      <Label for="Title">Last Name</Label>
                      <Input type="text" name="lastName" required  id="lastname" />
                    </Col>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col className="row">

                    <Col md={4}>
                      <Label for="Email">Email</Label>
                      <Input type="email" name="firstName" required  id="firstName" />
                    </Col>

                    <Col md={4}>
                      <Label for="Phone">Phone</Label>
                      <Input type="tel" name="lastName" required  id="lastname" />
                    </Col>

                    <Col md={4}>
                      <Label for="Gender">Gender</Label>
                      <Input type="select" name="gender" required  id="gender" >
                        <option id="male" value="male">Male</option>
                        <option id="female" value="gender">Female</option>
                        </Input>
                    </Col>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col className="row">

                    <Col md={4}>
                      <Label for="Address">Address 1</Label>
                      <Input type="text" name="address1" required  id="address1" />
                    </Col>

                    <Col md={4}>
                      <Label for="Address">Address 2</Label>
                      <Input type="text" name="address2" id="address2" />
                    </Col>

                    <Col md={4}>
                      <Label for="Address">Address 3</Label>
                      <Input type="text" name="address3"  id="address3" />
                        
                    </Col>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col className="row">

                    <Col md={4}>
                      <Label for="City">City</Label>
                      <Input type="text" name="city" id="addrcityess1" />
                    </Col>

                    <Col md={4}>
                      <Label for="State">State</Label>
                      <Input type="text" name="state" id="state" />
                    </Col>

                    <Col md={4}>
                      <Label for="Zipcode">Zipcode</Label>
                      <Input type="text" name="zipcode" id="zipcode" />
                        
                    </Col>
                    </Col>
                  </FormGroup>


                  <FormGroup>
                    <Col className="row">

                    <Col md={4}>
                      <Label for="licence">Licence</Label>
                      <Input type="text" name="licence"  id="licence" />
                    </Col>

                    <Col md={4}>
                      <Label for="website">Website</Label>
                      <Input type="text" name="website"  id="website" />
                    </Col>

                    <Col md={4}>
                      <Label for="fax">Fax</Label>
                      <Input type="text" name="fax"  id="fax" />
                        
                    </Col>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col className="row">

                    <Col md={4}>
                      <Label for="Facebook">Facebook</Label>
                      <Input type="link" name="facebook"  id="facebook" />
                    </Col>

                    <Col md={4}>
                      <Label for="Linkedin">Linkedin</Label>
                      <Input type="link" name="linkedin"  id="linkedin" />
                    </Col>

                    <Col md={4}>
                      <Label for="Twitter">Twitter</Label>
                      <Input type="link" name="twitter"  id="twitter" />
                        
                    </Col>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col className="row">

                    <Col md={4}>
                      <Label for="Instagram">Instagram</Label>
                      <Input type="link" name="instagram"  id="instagram" />
                    </Col>

                    <Col md={4}>
                      <Label for="Google">GOogle Business</Label>
                      <Input type="link" name="googleBusiness"  id="googleBusiness" />
                    </Col>

                    <Col md={4}>
                      <Label for="Ptin">Pinterest</Label>
                      <Input type="link" name="ptin"  id="ptin" />
                        
                    </Col>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col className="row">

                    <Col md={4}>
                      <Label for="Education">Education</Label>
                      <Input type="text" placeholder="If more than one, separate them with a comma" name="education"  id="education" />
                    </Col>

                    <Col md={4}>
                      <Label for="Languages">Languages Spoken</Label>
                      <Input type="link" placeholder="If more than one, separate them with a comma" name="languages"  id="languages" />
                    </Col>

                    <Col md={4}>
                      <Label for="Industry">Industry</Label>
                      <Input type="link" name="industry"  id="industry" />
                        
                    </Col>
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
                            id="bio"
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
    
         
    
      </>
        )
    }
 export default AddAgent;

