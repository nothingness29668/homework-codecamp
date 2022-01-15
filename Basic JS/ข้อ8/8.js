alert( null || 2 || undefined );  //2
alert( alert(1) || 2 || alert(3) ); // 1 และ 2
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) ); // 1 and udefined
alert( null || 2 && 3 || 4 ); //3

//check age in 18-60
let age = prompt("How old are you ?")
if(age>=18 && age <=60){
    alert("Your age is between 18-60.")
}else if(age<18 || age >60)
    alert("Your age is not between 18-60.")


if (-1 || 0) alert( 'first' ); // only first that come out.
if (-1 && 0) alert( 'second' );
if (null || -1 && 0) alert( 'third' );


let user = prompt("Username?");

if(user == "Admin"){
let passWord = prompt("Password?")
    if(passWord=="codecamp#5"){
        alert("Welcome")
    }else if(passWord==null || passWord==undefined){
        alert("cancel")
    }else{
        alert("Wrong password")
    }
}else if(user==null || user==undefined){
    alert("cancel")
}else{
    alert("i dont know you.")
}

