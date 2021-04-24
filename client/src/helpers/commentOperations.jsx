import React from "react";
import { getApi } from "./apiCalls";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

export async function postComment(requestInfo) {
  const request = {
    url: `http://localhost:8080/posts/${requestInfo}`,
    mode: "cors",
    credentials: "include",
  };
  const response = await getApi(request);
  return response;
}
