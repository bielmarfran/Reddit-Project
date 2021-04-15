var postUuid;

document.addEventListener(
  "DOMContentLoaded",
  async function () {
    postUuid = document.location.search.substring(6);

    await performGetPost();
  },
  false
);

function performGetPost() {
  //let headers = new Headers();
  //headers.append('Auto','');
  console.log(postUuid);
  if (postUuid != "") {
    fetch(`http://localhost:8080/posts/${postUuid}`, {
      mode: "cors",
      method: "GET",
      credentials: "include",
      //headers: headers
    })
      .then((response) => response.json())
      .then((json) => createPostDom(json)) //console.log(json)
      .catch((error) => console.log("Authorization failed : " + error.message));
  } else {
    //window.location.replace(`http://localhost:3000`);
  }
}
