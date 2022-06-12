function apicomments(cb){
    const data = fetch('https://jsonplaceholder.typicode.com/comments')
    data
    .then(res=> {
        jsonData = res.json()
        jsonData
        .then(result=> cb(result))
        .catch(ee=> cb(ee))
    })
    .catch(e=> cb(e))
}

apicomments(res=> console.log(res))



function apiphotos(cb){
    const data = fetch('https://jsonplaceholder.typicode.com/photos')
    data
    .then(res=> {
        jsonData = res.json()
        jsonData
        .then(result=> cb(result))
        .catch(ee=> cb(ee))
    })
    .catch(e=> cb(e))
}

apiphotos(res=> console.log(res))