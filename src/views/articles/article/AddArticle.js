import React, {useEffect, useRef} from 'react'

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
  import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getArticleCategories } from 'redux/_actions/articles/category/index.js';
import { addArticle } from 'redux/_actions/articles/article/index.js';

  const AddArticle = props => {

    // Get Categories from redux
    const categories = useSelector(store => store.categories.categories, shallowEqual);
    const dispatch = useDispatch();
    const body = useRef("");
 
    // Fetch Categories on mount
    useEffect(() => {
      dispatch(getArticleCategories());
    }, [dispatch]);

    // Categories select options
    const catOptions = categories?.map((cat, i) => <option key={`opt-${i}`} value={cat._id}>{cat.name}</option>);

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
      alert("Article Body Content is too short or empty");
    }
    else if (form.checkValidity()) {
      const formData = new FormData(form);
      formData.append("body", body.current);
      dispatch(addArticle(formData));
      props.history.push("/admin/articles/");
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
                      <Label for="category">Status</Label>

                        <Input type="select"
                            required
                            className="mr-sm-2"
                            name="status"
                            id="status"
                          >
                            <option value="approved">Approve</option>
                            <option value="pending">Pend</option>
                            <option value="rejected">Reject</option>
                          
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
                  <FormGroup tag="fieldset">
                    <Col sm={12}>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                    name="featured"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Featured </span>
                  </label>
                </div>
              
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
 export default AddArticle;

