
function createPost(post){
    console.log(post);
    const body = document.body;

    const div = document.createElement("div"); 
    const area = `r/tailwind`;
    const autor = `r/bielmarfran`;
    const title = post.name;
    const comments = post.countComments;
    const time = `2 hours ago`;
    div.innerHTML = `
    <div class="w-full sm:w-10/12 md:8/12 lg:w-7/12 m-auto p-10">
    <div class="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer">
        <div>
            <div class="w-11/12 pt-2 pl-8" id="bodyPost">
                <div class="flex items-center text-xs mb-2">
                    <a href="#" class="font-semibold no-underline hover:underline text-black flex items-center">
                        <img class="rounded-full border h-5 w-5" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4">
                        <span class="ml-2">${area}</span>
                    </a>
                    <span class="text-grey-light mx-1 text-xxs">•</span>
                    <span class="text-grey">Posted by</span>
                    <a href="#" class="text-grey mx-1 no-underline hover:underline">${autor}</a>
                    <span class="text-grey">${time}</span>
                </div>
                <div>
                    <h2 class="text-lg font-medium mb-1">${title}</h2>
                </div>
                <div class="mt-10 mb-2">
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                     the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                     but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </div>
                <div class="inline-flex items-center my-1">
                    <a href="" class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black">
                        <svg class="inline fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                        </svg>
                        ${comments}<span class="hidden md:inline">&nbsp;comments</span>
                    </a>
                    <!--<a href="/hagnerd/setting-up-tailwind-with-create-react-app-4jd" class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black">
                        <svg class="inline fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                        </svg>
                        <span class="hidden md:inline">&nbsp;reactions</span>
                    </a>-->
                </div>
                <div class="mb-5 mt-5">
                    <hr>
                </div>
            
                <div class="w-full md:w-full px-3  mt-2">
                    <div class="p-0 m-0">
                        <p class="text-xs ml-0.5 mb-0.5">Comentar como <a class="text-blue-500">Usuario</a></p>
                        <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required>
                        
                        </textarea>
                        <div class="modal-footer py-3 px-5 border0-t text-right">
                            <button
                            class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
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

    body.querySelector('#app').appendChild(div);
    post.comments.forEach(comment => {
        const div = document.createElement("div"); 
        //const area = `r/tailwind`;
        const autor = comment.userID;
        //const title = post.name;
        const bodyComment = comment.body;
        //const comments = post.countComments;
        const time = `2 hours ago`;
        div.innerHTML = `
        <div class="mb-5 mt-5">
            <hr>
        </div>
        <div name="comment">
            <div class="flex items-center text-xs ">
                <a href="#" class="font-semibold no-underline hover:underline text-black flex items-center">
                    <img class="rounded-full border h-5 w-5" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4">
                    <span class="ml-2">${autor}</span>
                </a>                        
                <span class="text-grey ml-2">${time}</span>
            </div>
            <div class="ml-7 mb-5">
                ${bodyComment}
            </div>
        </div>
        `;
        body.querySelector('#bodyPost').appendChild(div);
    });
         /*
        const area = `r/tailwind`;
        const autor = res.username;
        const title = post.name;
        const comments = post.countComments;
        const time = `2 hours ago`;
        
    
    */
      
        
    //

}