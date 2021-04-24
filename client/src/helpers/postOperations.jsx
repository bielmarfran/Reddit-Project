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

export async function deletePost(requestInfo) {
  const request = {
    url: `/posts/${requestInfo}`,
    mode: "cors",
    credentials: "include",
  };
  const response = await deleteApi(request);
  return response;
}

export async function getAllPosts(requestInfo) {
  const request = {
    url: `/posts`,
    mode: "cors",
    credentials: "include",
    headers: headers,
  };
  const response = await getApi(request);
  return response;
}

/*
function removePost(postUuid) {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  fetch(`http://localhost:8080/posts/${postUuid}`, {
    mode: "cors",
    method: "DELETE",
    credentials: "include",
    headers: headers,
  })
    .then((response) => response.json())
    .then((json) => {
      json.response == "Post Deleted!"
        ? removePostDom(postUuid)
        : console.log("json");
    })
    .catch((error) => console.log("Authorization failed : " + error));
  //debugger;
}
*/
