import axios from "axios";
import { useEffect, useState } from "react";

const useReceivedDataHttp = () => {
  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");

  const [resmails, setMails] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios
        .get(
          `https://mail-box-client-668c7-default-rtdb.firebaseio.com/${email}/received.json`
        )
        .then((res) => {
          setMails(res.data);
        })
        .catch((err) => {
        });
    }, 2000);
  }, [email]);

  if (resmails === null) {
    return "";
  }

  const result = Object.values(resmails);
  result.reverse();

  return result;
};

export default useReceivedDataHttp;