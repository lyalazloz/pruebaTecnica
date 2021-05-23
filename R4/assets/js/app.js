// import {ajax} from "./Funciones.js";
// api key para clima 23edd9aff12a611640b6b0eb81d232f6

let params = new URLSearchParams ({
    access_key: `23edd9aff12a611640b6b0eb81d232f6`,
    query : `Argentina`,
    
})
  
fetch(`http://api.weatherstack.com/current?&${params}`).then(res => res.json()).then(console.log);