import React,{ Component } from 'react';
import axios from 'redux/axios/index'

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
    Row,
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
        axios
        .post('/reset-password', {
          email: this.state.email
        })
        .then(response => {
          console.log(response.data);
          if (response.data == 'Email not in Db') {
            this.setState({
              error: true,
              message: '',
            })
          } else if (response.data == 'Recovery Email Sent') {
            this.setState({
              error: false,
              message: 'Recovery Email Sent',
            });
          }
        })
        .catch(error => {
          console.log(error.data);
        });
      }
    };

    render(){
      const { email, message, error } = this.state
    
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
              console.log(error.message)
              
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default PasswordReset;
