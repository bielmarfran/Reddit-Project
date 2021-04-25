import React from "react";
import AlertWarningRed from "../components/alerts/AlertWarningRed";
import AlertAtentionBlue from "../components/alerts/AlertAtentionBlue";
import AlertSuccessGreen from "../components/alerts/AlertSuccessGreen";

export function callAlert(state) {
  if (typeof state.error !== "undefined") {
    return <AlertWarningRed errorMsg={state.error} />;
  } else if (typeof state.message !== "undefined") {
    return <AlertAtentionBlue errorMsg={state.message} />;
  } else if (typeof state.success !== "undefined") {
    return <AlertSuccessGreen successMsg={state.message} />;
  } else if (typeof state !== "undefined") {
    return <AlertWarningRed errorMsg={state} />;
  }
}
