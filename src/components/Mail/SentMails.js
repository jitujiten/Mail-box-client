import React, { useEffect, useState } from "react";
import axios from "axios";
import SentMailss from "./SentMailDesign";
import { useSelector } from "react-redux";
import useSendDataHttp from "../../http/sent-http";


const ShowsentMail = (props) => {
//   //   const id = Math.random();
  const result2 = useSendDataHttp(); 
//   console.log("inside show Emails");
//   let email = localStorage.getItem("Email").replace(".", "").replace("@", "");

//   const [resmails, setMails] = useState([]);

 let sendMails11 = useSelector((state) => state.email.sentEmails);

//   useEffect(() => {
//     setInterval(() => {
//         axios
//         .get(
//           `https://mail-box-client-668c7-default-rtdb.firebaseio.com/${email}/sent.json`
//         )
//         .then((res) => {
//           console.log(res.data);
//           setMails(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, 2000);
   
//   }, []);

//   if (resmails === null) {
//     return <h2>You have no mail</h2>;
//   }

//   const result = Object.values(resmails);
//   result.reverse();

  return (
    <>
    {result2.map((item) => (
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