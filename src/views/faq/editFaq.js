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
  import Header from "../../components/Headers/Header.js";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {getFaqs} from '../../redux/_actions/faq/index';
import { updateFaq } from '../../redux/_actions/faq/index';

  const EditFaq = props => {

    // faqs  from redux
    const faq = useSelector(store => store.faqs.faqs?.filter(art => art._id === props.match.params.id)[0] ?? null, shallowEqual);
    const dispatch = useDispatch();
    const message = useRef(faq?.message);

    console.log("edit faq", faq, "then",)

    // Fetch faqs on mount
    useEffect(() => {
      dispatch(getFaqs());
    }, [dispatch]);
    
   
    
    /* Submit New Faq */
    const handleSubmit = e =>  {
      e.preventDefault();
      e.stopPropagation();
      const form = e.currentTarget;

      if (message.current?.length < 30){
        alert("Faq Body Content is too short or empty");
      }
      else if (form.checkValidity()) {
        const formData = new FormData(form);
        formData.append("id", props.match.params.id);
        formData.append("message", message.current);
        dispatch(updateFaq(formData));
        props.history.push("/admin/faqs/");
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
                <h3 className="mb-0">Edit Faq</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit}>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Title</Label>
                      <Input type="text" name="title" required  id="title" defaultValue={faq?.title} />
                    </Col>
                  </FormGroup>
                
                
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Body">Body</Label>
                     
                      <Editor
                            initialValue={faq?.message}
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
 export default EditFaq;

