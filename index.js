"use strict";
const personlist = [
    { name: "reza",
        age: 32,
        id: "jjjj-lk",
    },
    { name: "sara",
        age: 18,
        id: "jjjj-lkooo",
    }
];
const creat = (person) => {
    personlist.push(person);
};
const update = (id, person) => {
    const idp = personlist.findIndex((item) => item.id === id);
    personlist[idp] =
    ;
};
