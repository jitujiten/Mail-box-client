import { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Badge from "react-bootstrap/Badge";
import Mailfirst from "./ComposeMail";
import Inbox from "./Inbox";
import ShowsentMail from "./SentMails";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import useReceivedDataHttp from "../../http/received-http";
import { useHistory } from "react-router-dom";

const ManagedMails=()=> {
  const history = useHistory();

  const buttonHandler = () => {
    localStorage.removeItem("Email");
    history.replace("/auth");
  };
  
  let count = 0;
  const result = useReceivedDataHttp();
  

  if (result.length === 0) {
    count = 0;
  } else {
    result.forEach((item) => {
      if (item.read === true) {
        count++
      };
    });
  }

  return (
    <Fragment>
      <div>
        <Navbar bg="warning" variant="dark" className="justify-content-top">
          <Container>
            <Navbar.Brand>Mailbox <Badge bg="dark">{count}</Badge></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Button variant="danger" onClick={buttonHandler}>
                logout
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Tabs
        defaultActiveKey="compose"
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="compose" title="COMPOSE" >
          <Mailfirst  />
        </Tab>
        <Tab eventKey="Inbox" title="INBOX">
          <Inbox />
        </Tab>
        <Tab eventKey="sent" title="SENT">
          <ShowsentMail />
        </Tab>
      </Tabs>
    </Fragment>
  );
}

export default ManagedMails;
