import React from "react";
import { postApi } from "./apiCalls";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Origin", "http://localhost:3000");

export async function performLogin(requestInfo) {
  const emailUser = requestInfo.email;
  const passwordUser = requestInfo.password;
  const request = {
    url: `/auth`,
    mode: "cors",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({ email: emailUser, password: passwordUser }),
  };
  const response = await postApi(request);
  return response;
}

export async function performLogout() {
  const request = {
    url: `/logout`,
    mode: "cors",
    credentials: "include",
    headers: headers,
  };
  const response = await postApi(request);
  return response;
}
/*
   .then((response) => response.json())
    .then((json) => {
      json.response == "Logout Successful"
        ? window.location.replace("http://localhost:3000/login.html")
        : "";
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
*/