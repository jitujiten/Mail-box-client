import React from "react";
import AuthPage from "./components/Pages/AuthPage";
import { Route } from "react-router-dom";
import ManagedMails from "./components/Mail/ManagedMails";



function App() {
  return (
    <main>
    <Route path="/" exact>
      <AuthPage />
    </Route>
    <Route path="/auth" exact>
      <AuthPage />
    </Route>
    <Route path="/mail">
      <ManagedMails />
    </Route>
  </main>
  );
}

export default App;
