let list=[]
function porkon(){
    let obj2={
        number:Math.random(),
        tarikh:Date.now(),
        kalameh:crypto.randomUUID(),
    }
    list.push(obj2)
}
porkon()
porkon()
porkon()
console.log(list)