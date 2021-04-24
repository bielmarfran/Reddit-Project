import React from "react";
const baseUrl = import.meta.env.VITE_API_URL;

export async function getApi(request) {
  try {
    const response = await fetch(baseUrl + request.url, {
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
    const response = await fetch(baseUrl + request.url, {
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

export async function deleteApi(request) {
  try {
    const response = await fetch(baseUrl + request.url, {
      mode: request.mode,
      method: "DELETE",
      credentials: request.credentials,
      headers: request.headers,
    });

    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
