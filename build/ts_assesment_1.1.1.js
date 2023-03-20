"use strict";
function getfakeapi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(units => units.json())
        .then(json => console.log(json));
}
getfakeapi();
