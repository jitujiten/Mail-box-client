import { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Mailfirst from "./ComposeMail";
import Inbox from "./Inbox";
import ShowsentMail from "./SentMails";
import { Button,Badge } from "react-bootstrap";
import useSendDataHttp from "../../http/sent-http";


function ManagedMails() {
    let count = 0;
    const result = useSendDataHttp();
    result.map((item) => {
      if (item.read === true) count++;
    });

  return (
    <Fragment>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" href="/mail">
        @jitu-MailBox--"{count}"
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
