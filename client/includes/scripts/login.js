/*
function performLogin() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
   /// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');

    fetch('http://localhost:8080/users', {
        mode: 'cors',
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('Authorization failed : ' + error.message));
}*/

function performLogin() {
    console.log("DENTERO");
    let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
   /// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');
    //headers.append('Auto','');

    fetch('http://localhost:8080/login', {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: JSON.stringify({'email': 'teste@ggg.com', 'password': '123445'})
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('Authorization failed : ' + error.message));
    debugger;
}

