import React from "react";
import { getApi } from "./apiCalls";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

export async function getPost(requestInfo) {
  const request = {
    url: `/posts/${requestInfo}`,
    mode: "cors",
    credentials: "include",
  };
  const response = await getApi(request);
  return response;
}

export async function getAllPosts(requestInfo) {
  const request = {
    url: `/posts`,
    mode: "cors",
    credentials: "include",
  };
  const response = await getApi(request);
  return response;
}
