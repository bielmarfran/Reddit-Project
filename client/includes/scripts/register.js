document.addEventListener(
  "DOMContentLoaded",
  async function () {
    document
      .getElementById(`performRegister`)
      .addEventListener("click", function () {
        performRegister();
      });
    document
      .getElementById(`emailUser`)
      .addEventListener("change", function () {
        //var email = document.getElementById("emailUser");
        validateEmail();
      });
    document
      .getElementById(`passwordUser`)
      .addEventListener("change", function () {
        //var email = document.getElementById("emailUser");
        validatePassword();
      });
    document
      .getElementById(`password_confirm`)
      .addEventListener("change", function () {
        //var email = document.getElementById("emailUser");
        validatePassword();
      });
    //
  },
  false
);

function validateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email = document.getElementById("emailUser").value;
  var error = document.getElementById("errorEmail");
  if (email.match(mailformat)) {
    //alert("valid");
    error.setAttribute("class", "text-red-500 hidden");
  } else {
    error.setAttribute("class", "text-red-500");
    //alert("invalid");
  }
}

function validatePassword() {
  var password = document.getElementById("passwordUser").value;
  var password_confirm = document.getElementById("password_confirm").value;
  var error = document.getElementById("errorPassword");
  if (password === password_confirm) {
    error.setAttribute("class", "text-red-500 hidden");
  } else {
    error.setAttribute("class", "text-red-500");
  }
}

function performRegister() {
  let headers = new Headers();

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
      } else if (json.error == "Email ja existe!") {
        showAlert(json.error);
      } else if (json.error == "Username ja existe!") {
        console.log(json.error);
      }
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  // debugger;
}

function showAlert(msg) {
  var alert = document.getElementById("alert");
  alert.setAttribute("class", "");
  var alertMessage = document.getElementById("alertMessage");
  alertMessage.innerHTML = msg;
  /*
  alert.children[0].classList.remove("opacity-100");
  alert.children[0].classList.add("opacity-0");
  setTimeout(function () {
    //document.getElementById(key).close();
    //document.body.removeAttribute("style");
  }, 100);
  */
}
