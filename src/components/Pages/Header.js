import React from "react";
import { Nav } from "react-bootstrap";

const Header = () => {

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/mail">MailBox</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/auth" eventKey="link-1">
          Coming Soon-1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Coming Soon-2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;