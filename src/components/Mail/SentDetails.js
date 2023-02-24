import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";

const Showsentedmails = () => {
  const location = useLocation();
  const product = location.state2;
  //   console.log("inside show sent mails", product);
  //   console.log(product.id);

  return (
    <Fragment>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" href="/mail">
          @jitu-MailBox
        </Button>
      </div>
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
      <Button variant="primary" href="/mail">
        GotoMailbox
      </Button>
    </Fragment>
  );
};

export default Showsentedmails;
