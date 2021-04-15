document.addEventListener(
  "DOMContentLoaded",
  async function () {
    document
      .getElementById(`performRegister`)
      .addEventListener("click", function () {
        performRegister();
      });
  },
  false
);

function performRegister() {
  let headers = new Headers();

  debugger;

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  const usernameUser = document.getElementById("usernameUser").value;
  const emailUser = document.getElementById("emailUser").value;
  const passwordUser = document.getElementById("passwordUser").value;

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
      if (json.response == "Conta Criada com sucesso") {
        window.location.replace("http://localhost:3000/login.html");
      }
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  debugger;
}
