let queries= [ `Argentina`, `Colombia`, `Peru`, `Venezuela`]

let current = queries.map(function(q){
    console.log(q)
    let params = new URLSearchParams ({
        access_key: `23edd9aff12a611640b6b0eb81d232f6`,             
    })
    params.append("query", q)
    fetch(`http://api.weatherstack.com/current?&${params}`).then(res => res.json()).then(console.log);
    console.log(q)
})
