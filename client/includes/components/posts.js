function test(message) {
  window.alert(message);
}

function createPosts2(res) {
  console.log(res);

  for (let index = 0; index < 1; index++) {
    res.forEach((post) => {
      createPostDom(post);
    });
  }
}

function createPostDom(post) {
  const body = document.body;
  const div = document.createElement("div");
  div.setAttribute("id", `${post.uuid}`);
  div.setAttribute("name", `postHolder`);
  const topic = post.topic;
  const autor = post.user.username;
  const title = post.title;
  const comments = post.countComments;
  const time = `2 hours ago`;
  const removePost = `
    <svg id="removePost-${post.uuid}" class="ml-auto fill-current text-gray-700 w-6 h-6 mr-7 cursor-pointer hover:shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
    </svg>
    `;

  div.innerHTML = `
    <div class="w-full sm:w-10/12 md:8/12 lg:w-7/12 my-2 mx-auto py-2 px-10" >
      <div class="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer hover:shadow-lg">
    
        <div class="w-11/12 pt-2 pl-5"  id="openPost-${post.uuid}" )">
            <div class="flex items-center text-xs mb-2">
                <a href="#" class="font-semibold no-underline hover:underline text-black flex items-center">
                    <img class="rounded-full border h-5 w-5" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4">
                    <span class="ml-2">${topic}</span>
                </a>
                <span class="text-grey-light mx-1 text-xxs">•</span>
                <span class="text-grey">Posted by</span>
                <a href="#" class="text-grey mx-1 no-underline hover:underline">${autor}</a>
                <span class="text-grey">${time}</span>
                
            </div>
            <div>
                <h2 class="text-lg font-medium mb-1">${title}</h2>
            </div>
            <div class="inline-flex items-center my-1">
                <a  class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black">
                    <svg class="inline fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                    </svg>
                    ${comments}<span class="hidden md:inline">&nbsp;comments</span>
                </a>
                
            </a>
            </div>
          </div>
          <div class="w-1/12 pt-2">
          ${post.owner ? removePost : ""}
          </div>
      </div>
  </div>`;

  body.querySelector("#app").appendChild(div);

  if (post.owner) {
    document
      .getElementById(`removePost-${post.uuid}`)
      .addEventListener("click", function () {
        //removePost(post.uuid);
        console.log(post.uuid);
      });
  }

  document
    .getElementById(`openPost-${post.uuid}`)
    .addEventListener("click", function () {
      openPost(post.uuid);
    });
}
