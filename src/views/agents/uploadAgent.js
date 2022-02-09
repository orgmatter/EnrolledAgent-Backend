import React,{useState} from 'react'

// reactstrap components
import {
    FormGroup,
    Card,
    CardHeader,
    Form,
    Label,
    Button,
    Container,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import AddAgent from "./addAgent";
  const UploadAgent = (props) => {

    const {
      className
    } = props;
    const [modal, setModal] = useState(false);
    // const [nestedModal, setNestedModal] = useState(false);
    // // const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    // const toggleNested = () => {
    //   setNestedModal(!nestedModal);
    //   setCloseAll(false);
    // }
    // const toggleAll = () => {
    //   setNestedModal(!nestedModal);
    //   setCloseAll(true);
    // }

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
                
                  <Button onClick={toggle} color="info">
                    Add New Agent Manually +
                  </Button>
               
                </CardHeader>
                <Form >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Name">Csv Document</Label>
                   
                    </Col>
                  </FormGroup>
                  
                  <Button className="btn btn-primary mr-2">Submit</Button>
                </Form>
              </Card>
            </div>
          </Row>
         
        </Container>
        <Modal isOpen={modal} size="lg" toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Agent</ModalHeader>
        <ModalBody>
         <AddAgent />
          <br />
        </ModalBody>
        <ModalFooter>

          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </>
        )
      }
    
 export default UploadAgent;

