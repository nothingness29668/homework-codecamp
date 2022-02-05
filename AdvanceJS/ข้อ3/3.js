let key = prompt("what is key ?");
let obj = {};
let value;
while(key != "stop"){
    value = prompt("what is value?")
    obj[key]=value;
    key = prompt("what is key ?");
}
console.log(obj)