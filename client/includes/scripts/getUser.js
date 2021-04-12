

document.addEventListener('DOMContentLoaded', async function() {    
    await performGetUser()
    
   
}, false);

function createListItens(obj){
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
}





 function performGetUser() {
    /*
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
   /// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');
    //const cookieValue = document.cookie;
    //console.log(cookieValue.substring(13, cookieValue.length))
    //headers.append('access-token',cookieValue.substring(13, cookieValue.length));
    
    //headers.append('Auto','');

    fetch('http://localhost:8080/user', {
        mode: 'cors',
        method: 'GET',
        credentials: 'include',
        headers: headers
    })
    .then(response => response.json())
    .then(json => console.log(json))//createListItens(json)
    .catch(error => console.log('Authorization failed : ' + error.message));
  
    //const axios = require('axios');
    // Make a request for a user with a given ID
    */
    
}

