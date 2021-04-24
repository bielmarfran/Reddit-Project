import React from "react";
import { getApi, deleteApi } from "./apiCalls";

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

export async function createPost(requestInfo) {
  const postTopic = requestInfo.topic;
  const postTitle = requestInfo.title;
  const postBody = requestInfo.body;

  const request = {
    url: `/posts`,
    mode: "cors",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({
      topic: postTopic,
      title: postTitle,
      body: postBody,
    }),
  };

  const response = await postApi(request);
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

function createPost() {
  let headers = new Headers();
  var e = document.getElementById("postTopic");
  var value = e.options[e.selectedIndex].value;
  const postTopic = e.options[e.selectedIndex].text;
  const postTitle = document.getElementById("postTitle").value;
  const postBody = document.getElementById("postBody").value;

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

     

  //console.log(uuid, commentBody);
  fetch("http://localhost:8080/posts", {
    mode: "cors",
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({
      topic: postTopic,
      title: postTitle,
      body: postBody,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.uuid != null) {
        createPostDom(json);
        modalClose("mymodalcentered");
      }
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  //debugger;
}
*/
