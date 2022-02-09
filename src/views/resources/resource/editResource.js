import React, {useRef, useEffect} from 'react'

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
  import Header from "../../../components/Headers/Header.js";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getArticleCategories } from '../../../redux/_actions/articles/category/index.js';
import { getAllSponsors } from '../../../redux/_actions/sponsors/index';

import {getResources} from '../../../redux/_actions/resources';
import { updateResource } from '../../../redux/_actions/resources';

  const EditResource = props => {

    // Respurces, Sponsors and categories from redux
    const resource = useSelector(store => store.resources.resources?.filter(art => art._id === props.match.params.id)[0] ?? null, shallowEqual);
    const categories = useSelector(store => store.categories.categories, shallowEqual);
    const sponsors = useSelector(store => store.sponsors.sponsors, shallowEqual);
    const dispatch = useDispatch();
    const body = useRef(resource?.body);

    console.log("edit resource", resource, "then", categories, "then", sponsors)

    // Fetch Categories and Articles on mount
    useEffect(() => {
      dispatch(getArticleCategories());
      dispatch(getAllSponsors());
      dispatch(getResources());
    }, [dispatch]);
    
    // Categories select options
    const catOptions = categories?.map((cat, i) => <option 
                                                    key={`opt-${i}`} 
                                                    // selected={article?.category === cat._id} 
                                                    value={cat._id}>
                                                      {cat.name}
                                                    </option>);

    // Sponsors select options
    const spoOptions = sponsors?.map((spo, i) => <option 
                                                    key={`opt-${i}`} 
                                                    
                                                    value={spo._id}>
                                                      {spo.name}
                                                    </option>);
    
    /* Submit New Resource */
    const handleSubmit = e =>  {
      e.preventDefault();
      e.stopPropagation();
      const form = e.currentTarget;

      if (body.current?.length < 30){
        alert("Resource Body Content is too short or empty");
      }
      else if (form.checkValidity()) {
        const formData = new FormData(form);
        formData.append("id", props.match.params.id);
        formData.append("body", body.current);
        dispatch(updateResource(formData));
        props.history.push("/admin/resources/");
      }
    }
    // Description field update
    const handleEditorChange = content => {
      body.current = content;
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
                <h3 className="mb-0">Edit Resource</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit}>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Title</Label>
                      <Input type="text" name="title" required  id="title" defaultValue={resource?.title} />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Image">Image Url</Label>
                      <Input type="text" name="imageUrl" required  id="imageUrl" defaultValue={resource?.imageUrl} />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Action Link</Label>
                      <Input type="link" name="actionLink" required  id="actionLink" defaultValue={resource?.actionLink} />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Action Text</Label>
                      <Input type="text" name="actionText" required  id="actionText" defaultValue={resource?.actionText} />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="category">Category</Label>

                        <Input type="select"  id="exampleSelect"
                            required
                            className="mr-sm-2"
                            name="category"
                            defaultValue={typeof(resource?.category) === "object" ? resource?.category._id : resource?.category }
                          >
                            <option value=""></option>
                            {catOptions}
                        </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="sponsor">Sponsors</Label>

                        <Input type="select"  id="exampleSelect"
                            required
                            className="mr-sm-2"
                            name="sponsor"
                            defaultValue={typeof(resource?.sponsor) === "object" ? resource?.sponsor._id : resource?.sponsor }
                          >
                            <option value=""></option>
                            {spoOptions}
                        </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Body">Body</Label>
                     
                      <Editor
                            initialValue={resource?.body}
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
 export default EditResource;

