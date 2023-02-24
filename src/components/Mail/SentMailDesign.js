import React, { Fragment, } from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Allmails.module.css";

const SentMailss = (props) => {
  const { to, subject, id, message } = props.item;

  return (
    <Fragment>
      <div>
        <Container className="justify-content-md-center">
          <div className={classes.dv1}>
            <Link to={{ pathname: "/sent/details", state2: props }}>
              <Row>
                <Col>to--{to}</Col>
                <Col xs={6}>subject--{subject}</Col>

                <Col>
                  <Badge pill bg="info">
                    *
                  </Badge>{" "}
                </Col>
              </Row>
            </Link>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default SentMailss;