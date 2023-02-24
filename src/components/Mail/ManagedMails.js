import { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Mailfirst from "./ComposeMail";
import Inbox from "./Inbox";
import ShowsentMail from "./SentMails";
import { Button } from "react-bootstrap";

function ManagedMails() {
  let check = 2;
  return (
    <Fragment>
     <div className="d-grid gap-2">
        <Button variant="primary" size="lg" href="/mail">
          @jitu-MailBox
        </Button>
      </div>
    <Tabs
      defaultActiveKey="compose"
      id="fill-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="compose" title="COMPOSE">
        <Mailfirst />
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
