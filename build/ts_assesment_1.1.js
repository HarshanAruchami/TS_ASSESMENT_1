"use strict";
function getitems() {
    return fetch('./ts_assesment_1.1.json')
        .then(items => items.json())
        .then(items => { return items; });
}
getitems()
    .then(items => {
    console.log(items.map(a => `red ${a.red}, 
        pink ${a.pink}, 
        purple ${a.purple},
        deeppurple ${a.deeppurple}, 
        indigo ${a.indigo},
        blue ${a.blue},
        lightblue ${a.lightblue},
        cyan ${a.cyan},
        teal${a.teal},
        green${a.green},
        lightgreen${a.lightgreen},
        lime${a.lime},
        yellow${a.yellow},
        amber${a.amber},
        orange${a.orange},
        deeporange${a.deeporange},
        brown${a.brown},
        grey${a.grey},
        black${a.black},
        white${a.white}`));
}, toString);
