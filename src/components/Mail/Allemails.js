import React, { Fragment,useState } from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './Allmails.module.css';

const AllEmails = (props) => {
  const { from, subject, id, message } = props.item;

  const [seenMessage, setseenMessage] = useState(true);

  const seenLIke = () => {
    setseenMessage(false);
  };


  return (
    <Fragment>
      <div>
        <Container className="justify-content-md-center" onClick={seenLIke}>
          <div className={classes.dv1}>
            <Link to= {{ pathname: "/inbox/details", state: props}}>
            <Row>
              <Col>from--{from}</Col>
              <Col xs={6}>subject--{subject}</Col>
             {seenMessage && ( <Col>
                <Badge pill bg="info">
                  *
                </Badge>{" "}
              </Col>)} 
            </Row>
            </Link>

          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default AllEmails;