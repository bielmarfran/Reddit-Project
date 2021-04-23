import React from "react";

export async function getApi(requset) {
  try {
    const response = await fetch(requset.url, {
      mode: requset.mode,
      method: "GET",
      credentials: requset.credentials,
      //headers: headers,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

export function postApi(state) {}

export function putApi(state) {}

export function deleteApi(state) {}
