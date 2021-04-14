var postUuid;

document.addEventListener('DOMContentLoaded', async function() {
    postUuid  = (document.location.search).substring(6);

    await performGetPost()
    //let url = new URL(document.location.search);
    //let searchParams = new URLSearchParams(url.search);
    //console.log(searchParams.get('c'));

}, false);




//
//
function openPost(uuid){
    //postUuid = uuid;
    //console.log(postUuid);
    window.location.replace(`http://localhost:3000/post.html?uuid=${uuid}`);
}

 function performGetPost() {
    //let headers = new Headers();

    //headers.append('Content-Type', 'application/json');
    //headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    //headers.append('Origin','http://localhost:3000');
    //const cookieValue = document.cookie;
    //console.log(cookieValue.substring(13, cookieValue.length))
    //headers.append('access-token',cookieValue.substring(13, cookieValue.length));
    
    //headers.append('Auto','');
    console.log(postUuid);
    if(postUuid != ""){
        fetch(`http://localhost:8080/posts/${postUuid}` , {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            //headers: headers
        })
        .then(response => response.json())
        .then(json => createPost(json))//console.log(json)
        .catch(error => console.log('Authorization failed : ' + error.message));
      
    }else{
        //window.location.replace(`http://localhost:3000`);
    }


    
}

