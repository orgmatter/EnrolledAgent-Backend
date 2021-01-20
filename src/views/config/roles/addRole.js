import React, {useEffect, useRef} from 'react';
import { addRole } from '../../../redux/_actions/config/role/index';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


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


const AddRole = props => {

      
      const dispatch = useDispatch();

  const handleChange = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;
    
    const value = e.target.value;
    // to get the checked name
    const checkedName = e.target.name;

    console.log(value);
    //then you can do with the value all you want to do with it.
    };
    /* Submit New Role */
    const handleSubmit = e =>  {
      e.preventDefault();
      e.stopPropagation();
      const form = e.currentTarget;

      if (form.checkValidity()) {
        const formData = new FormData(form);
        //formData.append("permissions",);
        dispatch(addRole(formData));
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
                <h3 className="mb-0">Create New Role</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit} >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Title">Name</Label>
                      <Input type="text" name="name" required  id="name" />
                    </Col>
                  </FormGroup>
           
                  <FormGroup check>
                    <Col className="row">
                    
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" onClick={handleChange} name="permissions" value="can_view_analytics" />{' '}
                      CAN_VIEW_ANALYTICS
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_logs" />{' '}
                      CAN_VIEW_LOGS
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_users" />{' '}
                      CAN_VIEW_USERS
                    </Col>
                    </Col>
                    <Col className="row">
                    
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_subscribers" />{' '}
                      CAN_VIEW_SUBSCRIBERS
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_payment" />{' '}
                      CAN_VIEW_PAYMENT
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_agent" />{' '}
                      CAN_VIEW_AGENT
                    </Col>
                    </Col>

                    <Col className="row">
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_create_agent" />{' '}
                      CAN_CREATE_AGENT
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_delete_agent" />{' '}
                      CAN_DELETE_AGENT
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_update_agent" />{' '}
                      CAN_UPDATE_AGENT
                    </Col>
                    </Col>
                    <Col className="row">
                    
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_upload_agent" />{' '}
                      CAN_UPLOAD_AGENT
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_approve_listing_claim" />{' '}
                      CAN_APPROVE_LISTING_CLAIM
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_reject_listing_claim" />{' '}
                      CAN_REJECT_LISTING_CLAIM
                    </Col>
                    </Col>


                    <Col className="row">
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_article" />{' '}
                      CAN_VIEW_ARTICLE
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_create_article" />{' '}
                      CAN_CREATE_ARTICLE
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_delete_article" />{' '}
                      CAN_DELETE_ARTICLE
                    </Col>
                    </Col>
                    <Col className="row">
                    
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_update_article" />{' '}
                      CAN_UPDATE_ARTICLE
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_question" />{' '}
                      CAN_VIEW_QUESTION
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_create_question" />{' '}
                      CAN_CREATE_QUESTION
                    </Col>
                    </Col>



                    <Col className="row">
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_delete_question" />{' '}
                     CAN_DELETE_QUESTION
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_update_question" />{' '}
                      CAN_UPDATE_QUESTION
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_sponsor" />{' '}
                      CAN_VIEW_SPONSOR
                    </Col>
                    </Col>
                    <Col className="row">
                    
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_create_sponsor" />{' '}
                      CAN_CREATE_SPONSOR
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_delete_sponsor" />{' '}
                      CAN_DELETE_SPONSOR
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_update_sponsor" />{' '}
                      CAN_UPDATE_SPONSOR
                    </Col>
                    </Col>



                    <Col className="row">
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_resource" />{' '}
                      CAN_VIEW_RESOURSE
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_create_resource" />{' '}
                      CAN_CREATE_RESOURSE
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_delete_resource" />{' '}
                      CAN_DELETE_RESOURSE
                    </Col>
                    </Col>
                    <Col className="row">
                    
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_update_resource" />{' '}
                      CAN_UPDATE_RESOURSE
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_roles" />{' '}
                      CAN_VIEW_ROLES
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_create_role" />{' '}
                      CAN_CREATE_ROLE
                    </Col>
                    </Col>




                    <Col className="row">
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_delete_role" />{' '}
                      CAN_DELETE_ROLE
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_update_role" />{' '}
                      CAN_UPDATE_ROLE
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_staff" />{' '}
                      CAN_VIEW_STAFF
                    </Col>
                    </Col>
                    <Col className="row">
                    
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_create_staff" />{' '}
                      CAN_CREATE_STAFF
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_update_staff" />{' '}
                      CAN_UPDATE_STAFF
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_delete_staff" />{' '}
                      CAN_DELETE_STAFF
                    </Col>
                    </Col>




                    <Col className="row">
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_update_company" />{' '}
                      CAN_UPDATE_COMPANY
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_add_sub_to_company" />{' '}
                      CAN_ADD_SUB_TO_COMPANY
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_delete_category" />{' '}
                      CAN_DELETE_CATEGORY
                    </Col>
                    </Col>
                    <Col className="row">
                    
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_view_category" />{' '}
                      CAN_VIEW_CATEGORY
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_create_category" />{' '}
                      CAN_CREATE_CATEGORY
                    </Col>
                    <Col md={4}>
                      <Label check />
                      <Input type="checkbox" name="permissions" value="can_update_category" />{' '}
                      CAN_UPDATE_CATEGORY
                    </Col>
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


export default AddRole;
