"use strict";
const personlist = [
    { name: "zahra",
        lastname: "zahra",
        age: 54,
        job: "zahra",
        stutssingle: "zahra",
        gensiyat: "zahra",
        ghad: 54,
        vazn: 6,
        id: "zahra",
        shomaretelephone: 0,
    },
];
const creat = (person) => {
    personlist.push(person);
};
const update = (id, person) => {
    const idp = personlist.findIndex((item) => item.id === id);
    personlist[idp] = Object.assign(Object.assign({}, personlist[idp]), person);
};
console.log(personlist);
