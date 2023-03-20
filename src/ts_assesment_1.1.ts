interface getitems {
    red: string;
    pink: string;
    purple: string;
    deeppurple: string;
    indigo: string;
    blue: string;
    lightblue: string;
    cyan: string;
    teal: string;
    green: string;
    lightgreen: string;
    lime: string;
    yellow: string;
    amber: string;
    orange: string;
    deeporange: string;
    brown: string;
    grey: string;
    black: string;
    white: string;
}
function getitems(): Promise<getitems[]> {
    return fetch('./ts_assesment_1.1.json')
        .then(items => items.json())
        .then(items => { return items; })
}
getitems()
    .then(items => {
        console.log(items.map(a => 
        `red ${a.red}, 
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
        white${a.white}`))
    }, toString);

