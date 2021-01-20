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
import { getRoles } from '../../../redux/_actions/config/role/index';
import { addStaff } from '../../../redux/_actions/config/staff/index';

  const AddStaff = props => {

    // Get Roles from redux
    const roles = useSelector(store => store.roles.roles, shallowEqual);
    const dispatch = useDispatch();


    // Fetch Roles on mount
    useEffect(() => {
      dispatch(getRoles());
    }, [dispatch]);

    // Roles select options
    const roleOptions = roles?.map((role, i) => <option key={`opt-${i}`} value={role._id}>{role.name}</option>);

 

  /* Submit New Staff */
  const handleSubmit = e =>  {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      const formData = new FormData(form);
      dispatch(addStaff(formData));
      props.history.push("/admin/config/");
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
                <h3 className="mb-0">Create New Staff</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit} >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">First Name</Label>
                      <Input type="text" name="firstName" required  id="firstName" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Last Name</Label>
                      <Input type="text" name="lastName" required  id="lastName" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Email</Label>
                      <Input type="email" name="email" required  id="email" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Job Title</Label>
                      <Input type="text" name="jobTitle" required  id="jobTitle" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="role">Roles</Label>

                        <Input type="select" 
                            
                            className="mr-sm-2"
                            name="role"
                          >
                            <option value=""></option>
                            {roleOptions}
                        </Input>
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
 export default AddStaff;

