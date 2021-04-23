import React from "react";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

export async function getApi(state) {
  const response = await fetch("http://localhost:8080/posts", {
    mode: "cors",
    method: "GET",
    credentials: "include",
    //headers: headers,
  });
  const json = await response.json();
  return json;
}

export function postApi(state) {}

export function putApi(state) {}

export function deleteApi(state) {}
