import React, { Fragment } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const MailDetails = () => {
  const location = useLocation();
  const product = location.state;
  console.log("inside Maildetails", product);
  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");
  let Id = product.item.id;
  console.log(Id);

  const DeletemailHandler = async () => {
   await fetch(
      `https://mail-box-client-668c7-default-rtdb.firebaseio.com/${email}/received/${Id}.json`,
      {
        method: "DELETE",
      }
    );
    alert("Delete mail handler is working");
    <Redirect to="/mail" />;
  };

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
            <Badge bg="primary">from</Badge> {product.item.from}
          </Card.Title>
          <Card.Text>
            <Badge bg="secondary">Subject</Badge>
            {"    "}
            {product.item.subject}
          </Card.Text>
          <Card.Text>
            <Badge bg="info">message</Badge> {product.item.message}
          </Card.Text>
          <Button variant="danger" onClick={DeletemailHandler}>
            Delete mail
          </Button>{" "}
        </Card.Body>
      </Card>
      <Button variant="primary" href="/mail">
          GotoMailbox
        </Button>
    </Fragment>
  );
};

export default MailDetails;
