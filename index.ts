type contact={
name:string,
number:number|string,
id:string,
storg:"sim"| "divice",
}

const contactname=document.querySelector<HTMLInputElement>("#contact name")
console.log(contactname)
const buttonsubmet=document.querySelector("#button")
buttonsubmet?.addEventListener("click",()=>{
console.log(contactname?.value)})

