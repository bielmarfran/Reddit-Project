import React from "react";

export async function getApi(state) {
  try {
    const response = await fetch("http://localhost:8080/posts", {
      mode: "cors",
      method: "GET",
      credentials: "include",
      //headers: headers,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function postApi(state) {}

export function putApi(state) {}

export function deleteApi(state) {}
