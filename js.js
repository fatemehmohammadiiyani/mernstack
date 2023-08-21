const leftNumber = +prompt("Enter left number")
const proment = prompt("Enter proment")
const rightNumber = +prompt("Enter rightNumber")
if(isNaN(leftNumber)||isNaN(rightNumber)){
    console.log("error leftNumber Or rightNumber")
}
if(proment==="+"){
    console.log(leftNumber+rightNumber)   
}
if (proment==="-") {console.log(leftNumber-rightNumber)}

if(proment==="*"){
    console.log(leftNumber*rightNumber)}

if(proment==="/") {console.log(leftNumber/rightNumber)}