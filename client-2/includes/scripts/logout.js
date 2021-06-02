function performLogout() {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  fetch("http://localhost:8080/logout", {
    mode: "cors",
    method: "POST",
    credentials: "include",
    headers: headers,
  })
    .then((response) => response.json())
    .then((json) => {
      json.response == "Logout Logout Successful"
        ? window.location.replace("http://localhost:3000/login.html")
        : "";
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
}
