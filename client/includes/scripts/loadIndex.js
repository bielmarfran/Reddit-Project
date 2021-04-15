document.addEventListener(
  "DOMContentLoaded",
  async function () {
    await performGetPosts();
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
  },
  false
);

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
      json.error != null
        ? window.location.replace("http://localhost:3000/login.html")
        : createPosts2(json);
    }) //console.log(json)
    .catch((error) => console.log("Authorization failed : " + error.message));
}
