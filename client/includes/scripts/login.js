document.addEventListener(
  "DOMContentLoaded",
  async function () {
    document
      .getElementById(`performLogin`)
      .addEventListener("click", function () {
        performLogin();
      });
  },
  false
);

function performLogin() {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  //const usernameUser = document.getElementById("usernameUser").value;
  const emailUser = document.getElementById("email").value;
  const passwordUser = document.getElementById("password").value;

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
        window.location.replace("http://localhost:3000/");
      } else {
        ("");
      }
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  //debugger;
}
