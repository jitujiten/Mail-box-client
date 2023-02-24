import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Header from "../Pages/Header";

import { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { emailActions } from "../store/email-redux";
import { useDispatch } from "react-redux";
// import { Fragment } from "react-bootstrap/dist/react-bootstrap";

function Mailfirst() {
  const [message, Setmessage] = useState();
  const EmailInputRef = useRef();
  const subjectInputRef = useRef();
  // const messageInputref = useRef();

  const refHandler = (event) => {
    console.log(event.blocks[0].text);
    Setmessage(event.blocks[0].text);
  };

  let dispatch = useDispatch();

  const EmailSubmitHandler = (event) => {
    console.log("insided mail");
    // event.preventDefault();
    const receiverEmail = EmailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    // const enteredMessage = messageInputref.current.value;

    let receivedEmail = receiverEmail.replace(".", "").replace("@", "");
    let SenderEmail = localStorage.getItem("Email");
    console.log(SenderEmail);
    let emailSender = SenderEmail.replace(".", "").replace("@", "");

    const objSent = {
      to: receivedEmail,
      subject: enteredSubject,
      message: message,
    };

    const objRecieved = {
      from: emailSender,
      subject: enteredSubject,
      message: message,
    };

    fetch(
      `https://mail-box-client-668c7-default-rtdb.firebaseio.com/${receivedEmail}/received.json`,
      {
        method: "POST",
        body: JSON.stringify({
          ...objRecieved,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(async (res) => {
      const data = await res.json();

      fetch(
        `https://mail-box-client-668c7-default-rtdb.firebaseio.com/${receivedEmail}/received/${data.name}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            id: data.name,
          }),
        }
      );

      dispatch(
        emailActions.recievedEmail({
          id: data.name,
          from: objRecieved.from,
          subject: objRecieved.subject,
          message: objRecieved.message,
        })
      );
    });

    fetch(
      `https://mail-box-client-668c7-default-rtdb.firebaseio.com/${emailSender}/sent.json`,
      {
        method: "POST",
        body: JSON.stringify({
          ...objSent,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(async (res) => {
      const data = await res.json();

      fetch(
        `https://mail-box-client-668c7-default-rtdb.firebaseio.com/${emailSender}/sent/${data.name}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            id: data.name,
          }),
        }
      );
      dispatch(
        emailActions.sentBox({
          id: data.name,
          to: objSent.to,
          subject: objSent.subject,
          message: objSent.message,
        })
      );
    });

    alert("sent successfully");
    console.log("sent successfully");
  };

  return (
    <Fragment>
      
    <Form>
      <Form.Group>
        <Form.Label>To</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          ref={EmailInputRef}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Subject"
          required
          ref={subjectInputRef}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>message</Form.Label>
        {/* <Form.Control
          style={{ height: "350px" }}
          type="text"
          placeholder="Message"
          required
          ref={messageInputref}
        /> */}
        <Editor
          // ref={messageInputref}
          onChange={refHandler}
          // // style={{ height: "500px", width: "500px" }}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ width: 1350,height: 250, border: "1px solid black" }}
        />
      </Form.Group>
      <Form.Group>
        <Button onClick={EmailSubmitHandler} type="button" variant="primary">
          Submit
        </Button>{" "}
      </Form.Group>
    </Form>
  </Fragment>
  );
}

export default Mailfirst;
