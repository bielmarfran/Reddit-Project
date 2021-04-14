function postComment(uuid){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
        /*
    headers.append('Origin','http://localhost:3000');
    */
    const commentBody = document.getElementById("commentBody").value; 

    console.log(uuid,commentBody)
    fetch('http://localhost:8080/comment', {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: JSON.stringify({'body': commentBody, 'postUuid': uuid}),
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('Authorization failed : ' + error.message));
    //debugger;
}