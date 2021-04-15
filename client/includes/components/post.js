function createPostDom(res) {
  console.log(res);
  MY.post = res;
  var post = res.posts;

  const body = document.body;

  const div = document.createElement("div");
  div.setAttribute("id", post.uuid);
  const topic = post.topic;
  const autor = post.user.username;
  const title = post.title;
  const bodyComment = post.body;
  const comments = post.countComments;
  const time = `2 hours ago`;
  div.innerHTML = `
      <div class="w-full sm:w-10/12 md:8/12 lg:w-7/12 m-auto p-10">
      <div class="flex border border-grey-light-alt hover:border-grey rounded bg-white ">
          <div class="w-full pr-4"">
              <div class="w-full pt-2 pl-4" id="bodyPost">
                  <div class="flex items-center text-xs mb-2">
                  <a href="#" class="font-semibold no-underline hover:underline text-black flex items-center">
                  <img class="rounded-full border h-5 w-5" src="../../img/comida.svg">
                  <span class="ml-2">${topic}</span>
                  </a>

                      ${comments}
                      <span class="hidden md:inline">&nbsp;comments</span>
                  </a>
                      <span class="text-grey-light mx-1 text-xxs">•</span>
                      <span class="text-grey">Posted by</span>
                      <a href="#" class="text-grey mx-1 no-underline hover:underline">${autor}</a>
                      <span class="text-grey">${time}</span>
  
                  </div>
                  <div>
                      <h2 class="text-lg pl-2  font-medium mb-1">${title}</h2>
                  </div>
                  <div class="mt-8 mb-2 pl-2  lg:w-full">
                  ${bodyComment}
  
  
                  </div>
                  <div class="inline-flex items-center my-1">
                      <a  class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black" id="totalComments">
                          <svg class="inline fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                          </svg>
                          ${comments}
                          <span class="hidden md:inline">&nbsp;comments</span>
                      </a>
                      <a href="" class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black">
                          <svg xmlns="http://www.w3.org/2000/svg"  class="inline fill-current pb-0.5" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                          </svg>
                          <span class="hidden md:inline">&nbsp;Editar</span>
                      </a>
                  </div>
                  <div class="mb-5 mt-5">
                      <hr>
                  </div>
              
                  <div class="w-full md:w-full px-3  mt-2">
                      <div class="p-0 m-0">
                          <p class="text-xs ml-0.5 mb-0.5">Comentar como <a class="text-blue-500">${post.username}</a></p>
                          <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" id="commentBody" placeholder="'Type Your Comment' required">
                          </textarea>
                          <div class="modal-footer py-3 px-5 border0-t text-right" id="commentButton">
                              <button id="postComment-${post.uuid}" class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
                              >
                                  Commentar
                              </button>
                          </div>
                      </div>
                  </div>
                  </div>
              </div>
  
          </div>
      </div>`;

  body.querySelector("#app").appendChild(div);

  document
    .getElementById(`postComment-${post.uuid}`)
    .addEventListener("click", function () {
      postComment(post.uuid);
    });
  post.comments.forEach((comment) => {
    createCommentDom(comment, post.uuid);
  });
}

function createCommentDom(comment, postUuid) {
  const body = document.body;
  const div2 = document.createElement("div");
  div2.setAttribute("id", comment.uuid);
  //const area = `r/tailwind`;
  const autor = comment.user.username;
  //const title = post.name;
  const bodyComment = comment.body;
  //const comments = post.countComments;
  const time = `2 hours ago`;
  const tet = `
          <svg id="deleteComment-${comment.uuid}" class="ml-auto mr-2 fill-current text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
          </svg>
      `;
  const edit = `
          <a  id="editComment-${comment.uuid}" class="py-1 pl-1 mr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black" >
          <svg xmlns="http://www.w3.org/2000/svg"  class="inline fill-current pb-0.5" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
          </svg>`;

  div2.innerHTML = `
          <div class="mb-5 mt-5">
              <hr>
          </div>
          <div id="comment">
              <div class="flex items-center text-xs ">
                  <a href="#" class="font-semibold no-underline hover:underline text-black flex items-center">
                      <img class="rounded-full border h-5 w-5" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4">
                      <span class="ml-2">${autor}</span>
                  </a>                        
                  <span class="text-grey ml-2">${time}</span>
                  ${comment.owner ? edit : ""}
              </a>
              
                  ${comment.owner ? tet : ""}
              </div>
  
              <div class="ml-7 mb-5 mt-5 ">
                  ${bodyComment}
              </div>
  
          </a>
          </div>
          `;
  body.querySelector("#bodyPost").appendChild(div2);

  if (comment.owner) {
    document
      .getElementById(`deleteComment-${comment.uuid}`)
      .addEventListener("click", function () {
        deleteComment(comment.uuid, postUuid);
      });
    document
      .getElementById(`editComment-${comment.uuid}`)
      .addEventListener("click", function () {
        editComment(comment.uuid);
      });
  }
}
