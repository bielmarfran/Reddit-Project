document.addEventListener(
  "DOMContentLoaded",
  async function () {
    await performGetPosts();

    await getProfile();

    document
      .getElementById(`performLogout`)
      .addEventListener("click", function () {
        performLogout();
      });
    document.getElementById(`openModal`).addEventListener("click", function () {
      openModal("mymodalcentered");
    });
    document
      .getElementById(`createPost`)
      .addEventListener("click", function () {
        createPost();
      });
    document
      .getElementById(`modalClose`)
      .addEventListener("click", function () {
        modalClose("mymodalcentered");
      });
    document.getElementById(`profile`).addEventListener("click", function () {
      openModal("mymodalCenteredProfile");
    });
  },
  false
);

async function getProfile() {
  var x = document.cookie;
  var path = x.substring(x.lastIndexOf("=") + 1) + ".jpg";
  await fetch(`http://localhost:8080/public/` + path)
    .then((response) => {
      if (response.ok) {
        document
          .getElementById("profile")
          .setAttribute("src", "http://localhost:8080/public/bielmarfran.jpg");
      } else if (response.status === 404) {
        document
          .getElementById("profile")
          .setAttribute("src", "../../img/profile_default.svg");
      } else {
        return Promise.reject("some other error: " + response.status);
      }
    })
    .then((data) => console.log("data is", data))
    .catch((error) => console.log("error is", error));
}
function openPost(uuid) {
  postUuid = uuid;
  console.log(postUuid);
  window.location.replace(`http://localhost:3000/post.html?uuid=${uuid}`);
  debugger;
}

function performGetPosts() {
  fetch("http://localhost:8080/posts", {
    mode: "cors",
    method: "GET",
    credentials: "include",
    //headers: headers,
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.error != null) {
        window.location.replace("http://localhost:3000/login.html");
      } else {
        createPosts2(json);
      }
    }) //console.log(json)
    .catch((error) => console.log("Authorization failed : " + error.message));
}
