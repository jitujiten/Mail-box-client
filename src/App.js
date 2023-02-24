import React from "react";
import "./App.css";
import AuthPage from "./components/Pages/AuthPage";
import { Route } from "react-router-dom";
import Mailfirst from "./components/Mail/ComposeMail";
import Inbox from "./components/Mail/Inbox";
import MailDetails from "./components/Mail/MailDetails";
import ManagedMails from "./components/Mail/ManagedMails";
import Showsentedmails from "./components/Mail/SentDetails";
import { Button } from "react-bootstrap";
// import AuthPage from './components/Pages/AuthPage';
// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          @jitu-MailBox
        </Button>
      </div>

      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Route path="/inbox" exact>
        <Inbox />
      </Route>
      <Route path="/inbox/details" exact>
        <Showsentedmails />
      </Route>
      <Route path="/mail">
        <ManagedMails />
      </Route>
    </main>
  );
}

export default App;
