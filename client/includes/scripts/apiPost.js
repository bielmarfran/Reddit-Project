function createPost() {
  let headers = new Headers();
  const postTopic = document.getElementById("postTopic").value;
  const postTitle = document.getElementById("postTitle").value;
  const postBody = document.getElementById("postBody").value;

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  /*
        headers.append('Origin','http://localhost:3000');
        */

  //console.log(uuid, commentBody);
  fetch("http://localhost:8080/posts", {
    mode: "cors",
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({
      topic: postTopic,
      title: postTitle,
      body: postBody,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.uuid != null) {
        createPostDom(json);
        modalClose("mymodalcentered");
      }
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  //debugger;
}

function removePost(postUuid) {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  fetch(`http://localhost:8080/posts/${postUuid}`, {
    mode: "cors",
    method: "DELETE",
    credentials: "include",
    headers: headers,
  })
    .then((response) => response.json())
    .then((json) => {
      json.response == "Post Deleted!"
        ? removePostDom(postUuid)
        : console.log("json");
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  //debugger;
}

function removePostDom(key) {
  var myobj = document.getElementById(key);
  myobj.remove();
}

function performGetPost() {
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
      .catch((error) => {
        console.log("Authorization failed : " + error.message);
        debugger;
        window.location.replace("http://localhost:3000/");
      });
  } else {
    //window.location.replace(`http://localhost:3000`);
  }
}
