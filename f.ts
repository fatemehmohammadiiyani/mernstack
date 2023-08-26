type persontype={
    name:string;
    lastname:string;
    age:number;
    job:string;
    stutssingle:string;
    gensiyat:string;
    ghad:number;
    vazn:number;
    id:string;
    shomaretelephone:number;

}

const personlist:Array<persontype>=[
    {    name:"zahra",
    lastname:"zahra",
    age:54,
    job:"zahra",
    stutssingle:"zahra",
    gensiyat:"zahra",
    ghad:54,
    vazn:6,
    id:"zahra",
    shomaretelephone:0,
 
    },
]
const creat=(person:persontype):void =>{
     personlist .push(person) ;
}
const update=(id:persontype['id'],person:persontype)=>{
    const idp=personlist.findIndex((item)=>item.id===id)
    personlist[idp]={...personlist[idp],...person};
};

console.log(personlist)