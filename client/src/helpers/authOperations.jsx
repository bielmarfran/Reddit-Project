import React from "react";
import { postApi } from "./apiCalls";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Origin", "http://localhost:3000");

export async function performLogin(requestInfo) {
  const emailUser = requestInfo.email;
  const passwordUser = requestInfo.password;
  const request = {
    url: `/auth`,
    mode: "cors",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({ email: emailUser, password: passwordUser }),
  };
  const response = await postApi(request);
  return response;
}

/*
 function performLogin(data) {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");

    //const usernameUser = document.getElementById("usernameUser").value;
    const emailUser = data.email;
    const passwordUser = data.password;

    fetch("http://localhost:8080/auth", {
      mode: "cors",
      method: "POST",
      credentials: "include",
      headers: headers,
      body: JSON.stringify({ email: emailUser, password: passwordUser }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.response == "Logado com Sucesso") {
          history.push("/", { message: json.response });
        } else if (json.error == "Acesso não autorizado") {
          showAlert(json.error);
        }
      })
      .catch((error) => console.log("Authorization failed : " + error.message));
  }
*/
