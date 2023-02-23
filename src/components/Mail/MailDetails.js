import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const MailDetails = () => {
  const location = useLocation();
  const product = location.state;
  console.log("inside Maildetails", product)

  return (
    <Fragment>
      <h1>{product.item.from}</h1>
      <h1>{product.item.subject}</h1>
      <h1>{product.item.message}</h1>
    </Fragment>
  );
};

export default MailDetails;