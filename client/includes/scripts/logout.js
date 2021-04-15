function performLogout() {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  //const usernameUser = document.getElementById("usernameUser").value;

  fetch("http://localhost:8080/logout", {
    mode: "cors",
    method: "POST",
    credentials: "include",
    headers: headers,
  })
    .then((response) => response.json())
    .then((json) => {
      json.response == "Logout OK"
        ? window.location.replace("http://localhost:3000/login.html")
        : "";
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  debugger;
}
/*
function openPost() {
  console.log(document.getElementsByName("postHolder").id);

  window.location.replace(
    `http://localhost:3000/post.html?uuid=${
      document.getElementsByName("postHolder").id
    }`
  );
}*/
