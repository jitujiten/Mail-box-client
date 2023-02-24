import React, { useEffect, useState } from "react";
import axios from "axios";

import SentMailss from "./SentMailDesign";

const ShowsentMail = (props) => {
  //   const id = Math.random();

  console.log("inside show Emails");
  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");

  const [resmails, setMails] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://mail-box-client-668c7-default-rtdb.firebaseio.com/${email}/sent.json`
      )
      .then((res) => {
        console.log(res.data);
        setMails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (resmails === null) {
    return <h2>You have no mail</h2>;
  }

  const result = Object.values(resmails);

  return (
    <>
      {result.map((item) => (
        <SentMailss
          item={{
            to: item.to,
            id: item.id,
            subject: item.subject,
            message: item.message,
          }}
        />
      ))}
    </>
  );
};

export default ShowsentMail;