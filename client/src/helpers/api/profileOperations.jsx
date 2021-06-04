import React from "react";
import { postApi, getApi } from "./apiCalls";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
//headers.append("Origin", "https://thirsty-villani-f5cdd2.netlify.app/");

export async function getProfileInfo(requestInfo) {
  const emailUser = requestInfo.email;
  const request = {
    url: `/auth/${emailUser}`,
    mode: "cors",
    credentials: "include",
    //headers: headers,
  };
  const response = await getApi(request);
  return response;
}

export async function postFile(requestInfo) {
  const formData = new FormData();
  formData.append("myFile", requestInfo.myFile);
  formData.append("place", requestInfo.place);
  const request = {
    url: `/upload`,
    mode: "cors",
    credentials: "include",
    body: formData,
  };
  const response = await postApi(request);
  return response;
}
