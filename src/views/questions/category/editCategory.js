import React, {useRef, useEffect} from 'react'


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
  import Header from "../../../components/Headers/Header.js";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {getQuestionsCategories} from '../../../redux/_actions/questions/category/index';
import { updateQuestionCategory } from '../../../redux/_actions/questions/category/index';

  const EditCategoryQuestion = props => {

    // faqs  from redux
    const cat = useSelector(store => store.quecategories.quecategories?.filter(cat => cat._id === props.match.params.id)[0] ?? null, shallowEqual);
    const dispatch = useDispatch();
    const message = useRef(cat?.message);

    console.log("edit cat", cat, "then",)

    // Fetch categories on mount
    useEffect(() => {
      dispatch(getQuestionsCategories());
    }, [dispatch]);
    
   
    
    /* Submit New Faq */
    const handleSubmit = e =>  {
      e.preventDefault();
      e.stopPropagation();
      const form = e.currentTarget;

      if (form.checkValidity()) {
        const formData = new FormData(form);
        formData.append("id", props.match.params.id);
        formData.append("message", message.current);
        dispatch(updateQuestionCategory(formData));
        props.history.push("/admin/question/categories/");
      }
    }
    // Description field update
    const handleEditorChange = content => {
      message.current = content;
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
                <h3 className="mb-0">Edit Question Category</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit}>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Name</Label>
                      <Input type="text" name="name" required  id="name" defaultValue={cat?.name} />
                    </Col>
                  </FormGroup>
                
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Description</Label>
                      <Input type="text" name="description" required  id="description" defaultValue={cat?.description} />
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
 export default EditCategoryQuestion;

