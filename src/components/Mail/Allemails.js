import React, { Fragment,useState } from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './Allmails.module.css';
import {Button} from "react-bootstrap";

const AllEmails = (props) => {
  const { from, subject, id, message,read } = props.item;

  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");
  let checkread = read;
  // console.log("inside allMails", checkread);


  const seenLIke = async () => {
    console.log("inside seenlike");
    console.log(id);
   await fetch(
      `https://mail-box-client-668c7-default-rtdb.firebaseio.com/${email}/recived/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          read: false,
        }),
      }
    );
    // console.log("Seen check");
  };

  let seenCheck = (checkread === true) ? "* " : " ";
  // console.log(seenCheck);


  return (
    <Fragment>
    <div>
      <Container className="justify-content-md-center" onClick={seenLIke}>
        <div className={classes.dv1}>
          <Link to={{ pathname: "/inbox/details", state: props }}>
            <Row>
              <Col>from--{from}</Col>
              <Col xs={6}>subject--{subject}</Col>
              {seenCheck}
            </Row>
          </Link>
        </div>
      </Container>
    </div>
  </Fragment>
  );
};

export default AllEmails;