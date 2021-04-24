import React from "react";

export async function getApi(request) {
  try {
    const response = await fetch(request.url, {
      mode: request.mode,
      method: "GET",
      credentials: request.credentials,
      //headers: headers,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

export async function postApi(request) {
  try {
    const response = await fetch(request.url, {
      mode: request.mode,
      method: "POST",
      credentials: request.credentials,
      headers: request.headers,
      body: request.body,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

export function putApi(state) {}

export function deleteApi(state) {}
