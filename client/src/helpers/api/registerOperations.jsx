import React from "react";
import { postApi } from "./apiCalls";

let headers = new Headers();

headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Origin", "http://localhost:3000");

export async function performRegister(requestInfo) {
  const usernameUser = requestInfo.username;
  const emailUser = requestInfo.email;
  const passwordUser = requestInfo.password;

  const request = {
    url: `/auth/register`,
    mode: "cors",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({
      username: usernameUser,
      email: emailUser,
      password: passwordUser,
    }),
  };
  const response = await postApi(request);
  return response;
}

/**   function performRegister(data) {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");

    const usernameUser = data.username;
    const emailUser = data.email;
    const passwordUser = data.password;

    fetch("http://localhost:8080/auth/register", {
      mode: "cors",
      method: "POST",
      credentials: "include",
      headers: headers,
      body: JSON.stringify({
        username: usernameUser,
        email: emailUser,
        password: passwordUser,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.response === "Conta Criada com sucesso") {
          history.push("/login", { message: json.response });
        } else if (json.error == "Email ja existe!") {
          setMsg(json.error);
        } else if (json.error == "Username ja existe!") {
          setMsg(json.error);
        }
      })
      .catch((error) => console.log("Authorization failed : " + error.message));
    // debugger;
  }
}
*/
