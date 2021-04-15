function postComment(uuid) {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const commentBody = document.getElementById("commentBody").value;

  fetch("http://localhost:8080/comment", {
    mode: "cors",
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({ body: commentBody, postUuid: uuid }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.uuid != null) {
        json.owner = true;
        createCommentDom(json, uuid);
        document.getElementById("commentBody").value = "";
      }
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  //debugger;
}

function deleteComment(commentUuid, postUuid) {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  /*
      headers.append('Origin','http://localhost:3000');
      */
  const commentBody = document.getElementById("commentBody").value;

  //console.log(uuid,commentBody)

  fetch(`http://localhost:8080/comment/${commentUuid}`, {
    mode: "cors",
    method: "DELETE",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({ postUuid: postUuid }),
  })
    .then((response) => response.json())
    .then((json) => {
      json.response == "Comment Deleted!" ? removePostDom(commentUuid) : "";
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  //debugger;
}

function editComment(commentUuid) {
  const post = MY.post.posts.comments;
  post.forEach((element, index) => {
    if (commentUuid == element.uuid) {
      document.getElementById("commentBody").value = element.body;
      editCommentDom(element, index);
    }
  });
}

function editCommentDom(comment) {
  document.getElementById("commentButton").innerHTML = "";
  document.getElementById("commentButton").innerHTML = `
   <button onclick="editComment2('${comment.uuid}')" class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
  >
      Editar
  </button>
  <button onclick="" class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
  >
      Cancelar
  </button>
  `;
}

function editComment2(uuid) {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const commentBody = document.getElementById("commentBody").value;
  console.log(uuid, commentBody);
  fetch("http://localhost:8080/comment", {
    mode: "cors",
    method: "PUT",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({ body: commentBody, postUuid: uuid }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.uuid != null) {
        //json.owner = true;
        //createCommentDom(json, uuid);
        document.getElementById("commentBody").value = "";
      }
    })
    .catch((error) => console.log("Authorization failed : " + error.message));
  //debugger;
}

function removePostDom(key) {
  var myobj = document.getElementById(key);
  myobj.remove();
}
