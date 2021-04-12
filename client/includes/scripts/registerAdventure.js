function performNewAdventure() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
   /// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');
    headers.append('access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RlIiwiaWQiOjMsImlhdCI6MTYxNjk3MjE2OX0.STlCB1BiQntJE5Fhbz5d9Zwr01PymwhZo8lzRDg8Pmk');
    
    //headers.append('Auto','');

    fetch('http://localhost:8080/adventure', {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: JSON.stringify({	'name' : 'Aventure 21223',
        'userUuid' : '91c7edd1-0c42-46ab-8976-a81ea67cf3a7'})
    })
    .then(response => {
        if (response.status == 200) {
            window.location.replace("http://localhost:3000/");
          }
    })
    .then(json => console.log(json))
    .catch(error => console.log('Authorization failed : ' + error.message));

    if(response == 200){

    }
}
