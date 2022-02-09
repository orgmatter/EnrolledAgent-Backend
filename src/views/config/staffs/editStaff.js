import React, { useEffect} from 'react'
//import {addArticleCategory} from '../../../redux/_actions/articles/category/index'

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

import { getAllStaffs } from '../../../redux/_actions/config/staff/index';
import { updateStaff } from '../../../redux/_actions/config/staff/index';
import { getRoles } from '../../../redux/_actions/config/role/index';

  const EditStaff = props => {

    // Staffss from redux
    const staff = useSelector(store => store.staffs.staffs?.filter(staff => staff._id === props.match.params.id)[0] ?? null, shallowEqual);
    const roles = useSelector(store => store.roles.roles, shallowEqual);
    const dispatch = useDispatch();

    console.log("edit staff", staff)

    // Fetch Categories and Articles on mount
    useEffect(() => {
      dispatch(getAllStaffs());
      dispatch(getRoles());
    }, [dispatch]);

    // Roles select options
    const roleOptions = roles?.map((role, i) => <option key={`opt-${i}`} value={role._id}>{role.name}</option>);
    
    
    /* Submit New Article Category */
    const handleSubmit = e =>  {
      e.preventDefault();
      e.stopPropagation();
      const form = e.currentTarget;

      if (form.checkValidity()) {
        const formData = new FormData(form);
        formData.append("id", props.match.params.id);
        dispatch(updateStaff(formData));
        props.history.push("/admin/configuration");
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
                <h3 className="mb-0">Edit Staff</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit}>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Name">First Name</Label>
                      <Input type="text" name="name" required  id="name" defaultValue={staff?.firstName} />
                    </Col>
                  </FormGroup>
              
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Name">Last Name</Label>
                      <Input type="text" name="name" required  id="name" defaultValue={staff?.lastName} />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Name">Email</Label>
                      <Input type="text" name="name" readonly  id="name" defaultValue={staff?.email} />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Name">Job Title</Label>
                      <Input type="text" name="name" readonly  id="name" defaultValue={staff?.jobTitle} />
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
 export default EditStaff;

