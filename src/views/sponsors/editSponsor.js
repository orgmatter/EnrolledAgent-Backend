import React, { useEffect} from 'react'

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
  import Header from "../../components/Headers/Header";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getAllSponsors } from '../../redux/_actions/sponsors/index';
import { updateSponsor } from '../../redux/_actions/sponsors/index';

  const EditSponsor = props => {

    // Sponsors from redux
    const sponsor = useSelector(store => store.sponsors.sponsors?.filter(art => art._id === props.match.params.id)[0] ?? null, shallowEqual);
    const dispatch = useDispatch();
    

    console.log("edit article sponsor", sponsor)

    // Fetch sponsors on mount
    useEffect(() => {
      dispatch(getAllSponsors());
    }, [dispatch]);
    
    
    /* Submit New Article sponsor */
    const handleSubmit = e =>  {
      e.preventDefault();
      e.stopPropagation();
      const form = e.currentTarget;

      if (form.checkValidity()) {
        const formData = new FormData(form);
        formData.append("id", props.match.params.id);
        dispatch(updateSponsor(formData));
        props.history.push("/admin/sponsors/");
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
                <h3 className="mb-0">Edit Article sponsor</h3>
                </CardHeader>
                <Form  onSubmit={handleSubmit}>
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Name">Name</Label>
                      <Input type="text" name="name" required  id="name" defaultValue={sponsor?.name} />
                    </Col>
                  </FormGroup>
              
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="link">Link</Label>
                      <Input type="url" name="link" required  id="link" defaultValue={sponsor?.link} />
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
 export default EditSponsor;

