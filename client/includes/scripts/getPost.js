

document.addEventListener('DOMContentLoaded', async function() {    
    await performGetPost()
    
   
}, false);






 function performGetPost() {
     for (let index = 0; index < 12; index++) {
       // createListItens();
         
     }

    
    //let headers = new Headers();

    //headers.append('Content-Type', 'application/json');
    //headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    //headers.append('Origin','http://localhost:3000');
    //const cookieValue = document.cookie;
    //console.log(cookieValue.substring(13, cookieValue.length))
    //headers.append('access-token',cookieValue.substring(13, cookieValue.length));
    
    //headers.append('Auto','');

    fetch(`http://localhost:8080/posts/${'91feee1a-f0a2-4a28-806b-b0e22fefeeca'}` , {
        mode: 'cors',
        method: 'GET',
        credentials: 'include',
        //headers: headers
    })
    .then(response => response.json())
    .then(json => createPost(json))//console.log(json)
    .catch(error => console.log('Authorization failed : ' + error.message));
  

    
}

