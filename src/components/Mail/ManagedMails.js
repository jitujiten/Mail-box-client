import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Mailfirst from "./ComposeMail";
import Inbox from "./Inbox";
import ShowsentMail from "./SentMails";

function ManagedMails() {
  let check = 2;
  return (
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
  );
}

export default ManagedMails;
