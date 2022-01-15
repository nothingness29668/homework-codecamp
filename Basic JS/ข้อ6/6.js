if ("0"){
    alert('Hello Codecamo #11');
} //show kub

let name = prompt("What is my name ?");
if (name == 'theeraphat'){
    alert('Good JOB')
} else {
    alert("you don't know me")
} //6.5.2

let score = prompt("What is your score");
if (score >= 80){
    alert('you got A')
} else if(70<=score &&score <=79){
    alert('you got B')
} else if(60<= score &&score  <=69){
    alert('you got C')
} else if(50<= score &&score  <=59){
    alert('you got D')
} else if(score <50){
    alert('you got F')
} //6.5.3



//6.5.4
let age = prompt("How old are you?");
let price;

price = (age < 18) ? 2000 : 3500;

alert(price)