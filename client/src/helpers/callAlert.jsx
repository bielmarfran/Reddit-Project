import React from "react";
import AlertWarningRed from "../components/AlertWarningRed";
import AlertAtentionBlue from "../components/AlertAtentionBlue";

export function callAlert(state) {
  if (typeof state.error !== "undefined") {
    return <AlertWarningRed errorMsg={state.error} />;
  } else if (typeof state.message !== "undefined") {
    return <AlertAtentionBlue errorMsg={state.message} />;
  } else if (typeof state !== "undefined") {
    return <AlertWarningRed errorMsg={state} />;
  }
}
