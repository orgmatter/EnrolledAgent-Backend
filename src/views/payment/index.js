import React,{useState, useEffect} from 'react'
import moment from 'moment';
import axiosInstance from '../../redux/axiosInstance'
import { CSVLink } from "react-csv";
import Pagination from "./Pagination";
// reactstrap components
import { 
    Card,
    CardHeader,
   Table,
    Container,
    Row,
    Button
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
const Payment = () => {
    const [payments, setPayment] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10)

  useEffect(() => { 
    axiosInstance.get("payment")
      .then(res => {
        const payments = res.data.data;
        setPayment(payments);
        console.log(res.data.data)
      })
  }, []);

  //Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  const headers = [
    { label: "ID", key: "_id" },
    { label: "Amount", key: "amount" },
    { label: "Cancelled At", key: "canceled_at" },
    { label: "Cancellation Reason", key: "cancellation_reason" },
    { label: "Created", key: "created" },
    { label: "Currency", key: "currency" },
    { label: "Description", key: "description" },
    { label: "Livemode", key: "livemode" },
    { label: "Receipt Email", key: "receipt_email" },
    { label: "Status", key: "status" },
    { label: "Agent", key: "agent" },
    { label: "Purpose", key: "purpose" },
    { label: "Created At", key: "createdAt" },
    { label: "Updated At", key: "updatedAt" },
  ];

  const csvReport = {
    data: payments,
    headers: headers,
    filename: 'Payment_Transactions_Report.csv'
  };
  
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
                  
              <Button style={{float: 'right'}} color="info">
                    <CSVLink {...csvReport}>Export to CSV</CSVLink>
                  </Button>

                </CardHeader>
                <CardHeader className="border-0">
                  <h3 className="mb-0">Payment Transactions</h3>
                  
                </CardHeader>
               
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>

                      <th scope="col">Agent</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Description</th>
                      <th scope="col">Purpose</th>
                       <th scope="col">Receipt Email</th>
                       <th scope="col">Transaction Date</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(payments)}
                      {
                        payments.map((payment, index)=>(
                        <tr key={index}>                      
                          <td>{payment.agent}</td>
                          <td>{payment.amount}</td>
                          <td>{payment.description}</td>
                          <td>{payment.purpose}</td>
                          <td>{payment.receipt_email}</td>
                          <td>{moment(payment.createdAt).fromNow()}</td>
                         
                         
                          <td className="text-right">
                        
                      </td>
                      </tr>
                        ))
                      }
                    
                  </tbody>
                </Table>
                <Pagination dataPerPage={dataPerPage} totalData={payments.length} paginate={paginate} />
              </Card>
            </div>
          </Row>
         
        </Container>  
        </>
    )
}

export default Payment;
