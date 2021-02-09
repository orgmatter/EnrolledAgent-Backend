import React,{useEffect, useState} from 'react'
import moment from 'moment';
import {Link} from 'react-router-dom'
import {updatePaymentData} from '../../../redux/_actions/config/payment/';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import axiosInstance from '../../../redux/axiosInstance';
// reactstrap components
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

const Payment = (props) => {

  const [payment, setPayment] = useState({});

  useEffect(() => { 
    axiosInstance.get("/config")
      .then(res => {
        const payment = res.data.data;
        setPayment(payment);
        console.log(res.data.data)
      })
  }, []);

      
  const dispatch = useDispatch();

  
    /* Submit New Role */
    const handleSubmit = e =>  {
      e.preventDefault();
      e.stopPropagation();
      const form = e.currentTarget;

      if (form.checkValidity()) {
        const formData = new FormData(form);
        //formData.append("permissions",);
        dispatch(updatePaymentData(formData));
        //props.history.push("/admin/config/");
      }

    }
 
    return (
        <>
          
        {/* Page content */}
        <Container className="" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Update Payment Information</h3>
                </CardHeader>
                <Form onSubmit={handleSubmit} >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Licenence Verification Price">License Verification Price (<strong>Current Price:</strong> $ {payment.licenceVerificationPrice})</Label>
                      
                      <Input 
                      type="text" 
                      name="licenceVerificationPrice" 
                      id="licenceVerificationPrice" 
                      placeholder="Ex 10000. You do not need to include the dollar sign"

                      />
                    </Col>
                  </FormGroup>
                
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Account Upgrade Price">Account Upgrade Price (<strong>Current Price:</strong> $ {payment.accountUpgradePrice})</Label>

                      <Input 
                      type="text" 
                      name="accountUpgradePrice"  
                      id="accountUpgradePrice" 
                      placeholder="Ex 10000. You do not need to include the dollar sign" 
                      />
                    </Col>
                  </FormGroup>
                
                
                  
                  <Button type="submit"  className="btn btn-primary mr-2">Submit</Button>
                </Form>
              </Card>
            </div>
          </Row>
         
        </Container>
        </>
    )
}


export default Payment;
