import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import AlertWarningRed  from "../components/AlertWarningRed";


function Feed({ data }) {
  let history = useHistory();
  console.log(data);
  return (

  );
  function handleClick() {
    history.push("/register")
}
}

export default withRouter(Feed);
