import React,{useEffect, useState} from 'react'
import moment from 'moment';
import { connect } from "react-redux";
import axios from '../../../redux/axios'
import {Link} from 'react-router-dom'
import {updatePaymentData} from '../../../redux/_actions/config/payment/';
import PropTypes from 'prop-types';
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

const Payment = (payments) => {

  const [payment, setPayment] = useState({});

  const [formData, setFormData] = useState({
    accountUpgradePrice: '',
    licenceVerificationPrice: ''
  });

  const {
    accountUpgradePrice,
    licenceVerificationPrice
  }= formData;
  
  const onChange = e => {
    setFormData=({...formData, [e.target.name]: e.target.value});
  }
  useEffect(() => { 
    axios.get("/config")
      .then(res => {
        const payment = res.data.data;
        setPayment(payment);
        console.log(res.data.data)
      })
  }, []);

  // const count = useSelector(state => state.counter.count);
  // const dispatch = useDispatch();
  const handlePaymentSubmit = async e => {
    e.preventDefault();
    updatePaymentData();
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
                <Form onSubmit={e => handlePaymentSubmit(e)} >
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Licenence Verification Price">License Verification Price (<strong>Current Price:</strong> $ {payment.licenceVerificationPrice})</Label>
                      
                      <Input 
                      type="text" 
                      name="licenceVerificationPrice" 
                      id="licenceVerificationPrice" 
                      placeholder="Ex 10000. You do not need to include the dollar sign"
                      value={licenceVerificationPrice}
                      onChange={e => onChange(e)} 
                      />
                    </Col>
                  </FormGroup>
                
                  <FormGroup>
                    <Col sm={12}>
                      <Label for="Account Upgrade Price">Account Upgrade Price (<strong>Current Price:</strong> $ 1000)</Label>

                      <Input 
                      type="text" 
                      name="accountUpgradePrice"  
                      id="accountUpgradePrice" 
                      placeholder="Ex 10000. You do not need to include the dollar sign" 
                      value={accountUpgradePrice}
                      onChange={e => onChange(e)} 
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
Payment.propTypes = {
  payments: PropTypes.func.isRequired,
}

export default connect(null, {updatePaymentData})(Payment);
