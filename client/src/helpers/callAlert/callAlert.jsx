import React from "react";
import Alert from "../../components/Alerts/Alert";
// import AlertAtentionBlue from "../components/alerts/AlertAtentionBlue";
// import AlertSuccessGreen from "../components/alerts/AlertSuccessGreen";

export function callAlert(state) {
  // console.log("callAlert", state);
  // if (typeof state.error !== "undefined") {
  //   return <AlertWarningRed errorMsg={state.error} />;
  // } else if (typeof state.message !== "undefined") {
  //   return <AlertAtentionBlue atentionMsg={state.message} />;
  // } else if (typeof state.success !== "undefined") {
  //   return <AlertSuccessGreen successMsg={state.message} />;
  // } else if (typeof state !== "undefined") {
  //   return <AlertWarningRed errorMsg={state} />;
  // }

  if (typeof state.error !== "undefined") {
    return <Alert message={state.error} color={"red"} />;
  } else if (typeof state.message !== "undefined") {
    return <Alert message={state.message} color={"blue"} />;
  } else if (typeof state.success !== "undefined") {
    return <Alert message={state.message} color={"green"} />;
  } else if (typeof state !== "undefined") {
    return <Alert message={state} color={"red"} />;
  }
}
