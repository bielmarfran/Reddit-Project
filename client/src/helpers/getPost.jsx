import React from "react";
import { getApi } from "../helpers/apiCalls";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

export async function getPost(requestInfo) {
  const request = {
    url: `http://localhost:8080/posts/${requestInfo}`,
    mode: "cors",
    credentials: "include",
  };
  const response = await getApi(request);
  return response;
}

export async function getAllPosts(requestInfo) {
  const request = {
    url: `http://localhost:8080/posts`,
    mode: "cors",
    credentials: "include",
  };
  const response = await getApi(request);
  return response;
}
