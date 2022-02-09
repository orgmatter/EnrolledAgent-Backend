
import React,{useState, useEffect} from "react";
import axios from "../../redux/axiosInstance";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

const UserHeader = () => {

  const [profile, setProfile] = useState([]);

  useEffect(() => { 
    axios.get("/user/profile")
      .then(res => {
        const profile = res.data.data;
        setProfile(profile);
        console.log(res.data.data)
      })
  }, []);

    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">Hello {profile.firstName} {profile.lastName}</h1>
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can edit your profile here.
                  This is your profile page. You can edit your profile here.
                </p>
                {/* <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Edit profile
                </Button> */}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }


export default UserHeader;
