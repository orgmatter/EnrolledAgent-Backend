import React,{ Component } from 'react';
import axiosInstance from 'redux/axiosInstance/'
import {NotificationManager} from 'react-notifications'

// reactstrap components
import {
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col,
    Button
  } from "reactstrap";

class PasswordReset extends Component {
    constructor(){
      super();

      this.state = {
        email: '',
        error: false,
        message: '',
      };
    }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    sendEmail = e => {
      e.preventDefault();
      if (this.state.email === '') {
        this.setState({
          error: false,
          message: '',
        });
      } else{
        axiosInstance
        .post('/send-reset', {
          email: this.state.email
        })
        .then(res => res.data)
        .then(response => {
          console.log(response.data);
          NotificationManager.success(response.data.message,'Success!', 2000);
        })
        .catch(error => {
          let message  = error.response.data.error ?  error.response.data.error.message : 'An error occured, please try again later.';
          NotificationManager.error(message,'Error!', 2000);
          console.log(error.response.data.error);
        });
      }
    };

    render(){
      const { email } = this.state
    
    return (
        <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
          
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Password Reset</small>
              </div>
              <Form role="form" onSubmit={this.sendEmail}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend"> 
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email Address" value={email} onChange={this.handleChange('email')} type="email" name="email" required
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">Send</Button>
                </div>
              </Form>
         
              
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default PasswordReset;
