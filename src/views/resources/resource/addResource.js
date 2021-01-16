import React, {useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { ResourceAdd } from '../../../redux/_actions/resources/index';
import { Editor } from '@tinymce/tinymce-react';
import axios from '../../../redux/axios/index';
import Select from 'react-select';


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
import { getResourcesCategories } from 'redux/_actions/resources/category/index.js';
import { addResource } from 'redux/_actions/resources/index.js';
import { getAllSponsors } from 'redux/_actions/sponsors/index.js';

const AddResource = props => {

  // Get Categories from redux
  const categories = useSelector(store => store.rescategories.rescategories, shallowEqual);
  const sponsors = useSelector(store => store.sponsors.sponsors, shallowEqual);
  const dispatch = useDispatch();
  const body = useRef("");

  // Fetch Sponsors and Categories on mount
  useEffect(() => {
    dispatch(getResourcesCategories());
    dispatch(getAllSponsors());
  }, [dispatch]);

  // Categories select options
const catOptions = categories?.map((cat, i) => <option key={`opt-${i}`} value={cat._id}>{cat.name}</option>);
// Sponsors select options
const sponsorOptions = sponsors?.map((sponsor, i) => <option key={`opt-${i}`} value={sponsor._id}>{sponsor.name}</option>);

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
    alert("Resource Body Content is too short or empty");
  }
  else if (form.checkValidity()) {
    const formData = new FormData(form);
    formData.append("body", body.current);
    dispatch(addResource(formData));
    props.history.push("/admin/resources/");
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
                <h3 className="mb-0">Create New Article</h3>
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


export default AddResource;
