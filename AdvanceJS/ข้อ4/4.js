let obj = {};
obj.Name = "sonter";
obj.surName = "Pakorn";
obj.Name = "boy";
delete obj.Name;
//1

function isEmpty(obj){
    for(let key in obj){
    return false    
    }
    return true
}//2


const user = {
    name: "John"
  };
  
  // does it work? //is work because user const is fix only address
  user.name = "Pete";


  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
function sum(obj){
    let i = 0;
    for(let key in obj){
        i = i + obj[key];
    }
    return i
}  


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj, n){
    for(let key in obj){
        if(typeof obj[key] !== "number" ) continue;
        obj[key] =  obj[key] * n
    }
}
