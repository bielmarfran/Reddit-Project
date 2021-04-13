function test(message){
    window.alert(message);
}

function createPosts(res){
    const body = document.body;
    for (let index = 0; index < 1; index++) {

    res.posts.forEach(post => {

        const div = document.createElement("div"); 
        const area = `r/tailwind`;
        const autor = res.username;
        const title = post.name;
        const comments = post.countComments;
        const time = `2 hours ago`;
    
        div.innerHTML = `
        <div class="w-full sm:w-10/12 md:8/12 lg:w-7/12 my-2 mx-auto py-2 px-10" onClick="test('${post.uuid}')">
            <div class="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer hover:shadow-lg">
    
                <div class="w-11/12 pt-2 pl-5">
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
                    <div class="inline-flex items-center my-1">
                        <a href="/hagnerd/setting-up-tailwind-with-create-react-app-4jd#comments" class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black">
                            <svg class="inline fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            ${comments}<span class="hidden md:inline">&nbsp;comments</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    
        body.querySelector('#app').appendChild(div);
        
    });
}
    
    /*
        
    var count = Object.keys(obj.adventures).length
    console.log(obj)
    console.log(obj.adventures[0].name)
    const body = document.body;
    for (let i = 0; i < count; i++) {
        const div = document.createElement("div");  
        div.setAttribute("class","listItem"); 
        div.setAttribute("id","item1"+i); 
        body.querySelector('#listAdventures').appendChild(div);
    
        const span = document.createElement("span"); 
        span.setAttribute("class","bg-gray-400 h-2 w-2 m-2 rounded-full");
        span.setAttribute("id","item2"+i); 
        body.querySelector('#item1'+i).appendChild(span);
    
        const div2 = document.createElement("div");  
        div2.innerText = obj.adventures[i].name;
        div2.setAttribute("class","flex-grow font-medium px-2");
        body.setAttribute("id","item3"+i); 
        body.querySelector('#item1'+i).appendChild(div2);
    
    
        const div3 = document.createElement("div");  
        div3.innerText = "Players 5"
        div3.setAttribute("class","text-sm font-normal text-gray-500 tracking-wide");
        div3.setAttribute("id","item4"+i); 
        body.querySelector('#item1'+i).appendChild(div3);
      }
      */
}
