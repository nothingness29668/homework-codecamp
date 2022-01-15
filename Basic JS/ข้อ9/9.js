let i = 3;

while (i) {
  alert( i-- );
}// last number is 1

let i = 0;
while (++i < 5) alert( i ); //1 2 3 4

let i = 0;
while (i++ < 5) alert( i ); // 1 2 3 4 5



for (let i = 0; i < 5; i++) alert( i );

for (let i = 0; i < 5; ++i) alert( i );
//แสดงออกมาเหมือนกัน

//4. 2-10
for (let i = 2; i < 11; i++) alert( i );

//5
let i = -1;
while (i++ <2) alert( `number ${i}!` );
  

//6
let number = prompt("Choose number 0-100");
while (true) {
    let i = prompt("Guess Number ?");
    if(number==i){
        alert("Correct!!")
        break
    } else if(number < i) {
        alert("too low")
    } else {
        alert("too high")
    }

}