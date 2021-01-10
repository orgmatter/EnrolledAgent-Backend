import React, {Component} from 'react'
import { connect } from 'react-redux';
import {agentUpload} from '../../redux/_actions/agents/index';
import Dropzone from 'react-dropzone';

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

  export class uploadAgent extends Component {
    state = {
      doc: '',
      errors: {}
    };

    onChangeInput = (e) => this.setState({
      [e.target.name] : e.target.value
    })
  
    handleSubmit = (e) =>{
      e.preventDefault();
      
      const { doc } = this.state;
  
      //Check for errors
      if(doc === ''){
        this.setState({ errors: { doc: 'CSV Document is required'}});
        return;
      }
      const newPropertyAgentUpload = {
        doc,
      }
     
      
      //Submit Category
      if(this.props.agentUpload(newPropertyAgentUpload) == true){
        console.log('successful')
        NotificationManager.success('Agent Uploaded!', 'Successful!', 2000);
          //Clear state
        this.setState({
          doc: '',
          errors: {}
        })
        this.props.history.push('/admin/agents');
      }else{
        console.log('Something went wrong')
        NotificationManager.error('Something went wrong!', 'Erro!', 2000);
      }
      
       
      
    }

    onDrop = (acceptedFiles) => {
      console.log(acceptedFiles);
    }

    render() {
      const { doc, errors } = this.state;

      

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
                <h3 className="mb-0">Upload Agent</h3>
                </CardHeader>
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Name">Csv Document</Label>
                      <Dropzone onDrop={this.onDrop} accept=".csv">
                          {({getRootProps, getInputProps,isDragReject}) => (
                            <div {...getRootProps()}>
                              <input {...getInputProps()} value={doc} onChange = {this.onChangeInput} name="doc" error={errors.doc} id="doc" />
                              
                              Click me to upload a file!
                              {isDragReject && "File type not accepted, sorry!"}
                            </div>
                          )}  
                        </Dropzone>
                    </Col>
                  </FormGroup>
                  
                  <Button onClick={() => {if(window.confirm('Are you sure?'));}} className="btn btn-primary mr-2">Submit</Button>
                </Form>
              </Card>
            </div>
          </Row>
         
        </Container>
      </>
        )
      }
    }
 export default connect(null, {agentUpload})(uploadAgent);

