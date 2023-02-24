import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Showsentedmails = () => {
  const location = useLocation();
  const product = location.state2;
  console.log("inside show sent mails",product);

  return (
    <Fragment>
      <Card style={{ width: "90rem" }}>
        <Card.Body>
          <Card.Title>
            <Badge bg="primary">To</Badge> {product.item.to}
          </Card.Title>
          <Card.Text>
            <Badge bg="secondary">Subject</Badge>
            {"    "}
            {product.item.subject}
          </Card.Text>
          <Card.Text>
            <Badge bg="info">message</Badge> {product.item.message}
          </Card.Text>

        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Showsentedmails;