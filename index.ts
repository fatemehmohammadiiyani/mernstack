type persontype={
    name:string;
    age:number;
id:string;

}

const personlist:Array<persontype>=[
    { name:"reza",
       
       age:32,
       
       id:"jjjj-lk",
 
    }
    ,{ name:"sara",
    age:18,
    id:"jjjj-lkooo",
 }
]
const creat=(person:persontype):void =>{
     personlist .push(person) ;
}
const update=(id:persontype['id'],person:persontype)=>{
    const idp=personlist.findIndex((item)=>item.id===id)
    personlist[idp]={...personlist[idp],...person};
};
console.log(personlist)