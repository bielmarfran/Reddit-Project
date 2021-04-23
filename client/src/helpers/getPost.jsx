import React from "react";
import { getApi } from "../helpers/apiCalls";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

export async function getPost(time) {
  const request = {
    url: `http://localhost:8080/posts/${postUuid}`,
    mode: "cors",
    credentials: "include",
  };
}
