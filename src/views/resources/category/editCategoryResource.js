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
    Col,
    FormText
  } from "reactstrap";
  // core components
  import Header from "../../../components/Headers/Header.js";
  
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import {getResourcesCategories} from '../../../redux/_actions/resources/category/index';
import { updateResourceCat } from '../../../redux/_actions/resources/category/index';

  const EditResourceCat = props => {

    // Articles and categories from redux
    const category = useSelector(store => store.rescategories.rescategories?.filter(cat => cat._id === props.match.params.id)[0] ?? null, shallowEqual);
    const dispatch = useDispatch();
    const description = useRef(category?.description);

    console.log("edit resource category", category)

    // Fetch Categories and Articles on mount
    useEffect(() => {
      dispatch(getResourcesCategories());
    }, [dispatch]);
    
    
    /* Submit New Resource Category */
    const handleSubmit = e =>  {
      e.preventDefault();
      e.stopPropagation();
      const form = e.currentTarget;

      if (description.current?.length < 30){
        alert("Article description Content is too short or empty");
      }
      else if (form.checkValidity()) {
        const formData = new FormData(form);
        formData.append("id", props.match.params.id);
        formData.append("description", description.current);
        dispatch(updateResourceCat(formData));
        props.history.push("/admin/resource/categories/");
      }
    }
    // Description field update
    const handleEditorChange = content => {
      description.current = content;
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
                <h3 className="mb-0">Edit Resource Category</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit}>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="name">Name</Label>
                      <Input type="text" name="name" required  id="name" defaultValue={category?.name} />
                    </Col>
                  </FormGroup>
              
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="description">Description</Label>
                     
                      <Editor
                            initialValue={category?.description}
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
                            id="description"
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
 export default EditResourceCat;

