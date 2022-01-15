function draw(n){
    let star = ''
    for(let i = 0;i < n;i++){
        star = star + '*'
    }

    console.log(star);
}

//2
function draw(n){
    let star = ''
    for(let col = 0;col < n;col++){
        star = star + '*'
    }
    for(let row = 0;row < n;row++){
        console.log(star);
    }
   
}
//3
function draw(n){
    let star = ''
    for(let col = 1;col <= n;col++){
        star = star + col
    }
    for(let row = 0;row < n;row++){
        console.log(star);
    }
   
}


//4

function draw(n){
    let num = ''
    for(let row = 1;row <= n;row++){
    for(let col = 0;col < n;col++){
        num = num + row;
    
    }
    console.log(num);
    num = ''
}

}
//5
function draw(n){
    let num = ''
    for(let row = n;row > 0;row--){
    for(let col = 0;col < n;col++){
        num = num + row;
    
    }
    console.log(num);
    num = ''
}

}
//6
function draw(n){
    let num = ''
    let count = 1
    for(let row = 0;row < n;row++){
    for(let col = 0;col < n;col++){
        num = num + count;
        count = count + 1
    
    }
    console.log(num);
    num = ''
}

}
//7
function draw(n){
    let num = ''
    let count = n*n;
    for(let row = n;row > 0;row--){
    for(let col = 0;col < n;col++){
        
        num = num + count;
        count = count - 1
    
    }
    console.log(num);
    num = ''
}

}
//8
function draw(n){
    let num = ''
    let count = -2;
    for(let col = 0;col < n;col++){
        
        count = count + 2;
        console.log(count);
    
    }



}
//9
function draw(n){
    let num = ''
    let count = 0;
    for(let col = 0;col < n;col++){
        
        count = count + 2;
        console.log(count);
    
    }



}
//10
function draw(n){
    let num = ''
    let count = 0
    for(let row = 1;row <= n;row++){
    for(let col = 0;col < n;col++){
        count = count + row
        num = num + count;
        
    
    }
    console.log(num);
    num = ''
    count = 0
}

}
//11
function draw(n){
    let num = ''
    let count = 0
    for(let row = 0;row < n;row++){
    for(let col = 0;col < n;col++){
        if(row == col){
            num = num + "_"
        } else {
            num = num + "*"
        }

    }
    console.log(num);
    num = ''

}

}
//12

function draw(n){
    let num = ''
    let count = 0
    for(let row = n;row > 0;row--){
    for(let col = 1;col <= n;col++){
        if(row == col){
            num = num + "_"
        } else {
            num = num + "*"
        }

    }
    console.log(num);
    num = ''

}

}
//13
function draw(n){
    let num = ''
    let count = 0
    for(let row = 1;row <= n;row++){
    for(let col = 1;col <= n;col++){
   
        if(row+1 > col){
            num = num + "*"
        } else {
            num = num + "_"
        }


    }
    console.log(num);
    num = ''

}

}
//14
function draw(n){
    let num = ''
    let count = 0
    for(let row = n;row >= 1;row--){
    for(let col = 1;col <= n;col++){
   
        if(row+1 > col){
            num = num + "*"
        } else {
            num = num + "_"
        }


    }
    console.log(num);
    num = ''

}

}

//15



function draw(n){
    let num = ''
    let count = 2*n-1
    for(let row = 1;row <= 2*n-1;row++){
 
    for(let col = 1;col <= n;col++){
   
        if(row+1 > col && row < n+1){
            num = num + "*"
        } else if(row > n && count+1 > row){
            num = num + "*"
            count = count -1 

         
        } else {
            num = num + "_"
        }


    }

    
    console.log(num);
    num = ''
    count = 2*n-1


}

}
//16

function draw(n){
    let num = ''
    let count = 2*n-1
    let x 
 
    for(let row = 1;row <= 2*n-1;row++){
 
    for(let col = 1;col <= n;col++){
   
        if(row+1 > col && row < n+1){
            num = num + row
        } else if(row > n && count+1 > row){
            x = 2*n - row
            num = num + x
            count = count -1 

         
        } else {
            num = num + "_"
        }


    }

    x = 0
    console.log(num);
    num = ''
    count = 2*n-1


}

}

//17
function draw(n){
    let num = ''
    let count = 0
    for(let row = n;row >= 1;row--){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    console.log(num);
    num = ''

}

}

//18

function draw(n){
    let num = ''
    let count = 0
    for(let row = 2;row <= n;row++){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    console.log(num);
    num = ''

}

}
//19
function draw1(n){
    let num = ''
    let count = 0
    for(let row = n;row >= 1;row--){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    console.log(num);
    num = ''

}

}


function draw2(n){
    let num = ''
    let count = 0
    for(let row = 2;row <= n;row++){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    console.log(num);
    num = ''

}

}
function draw3(n){
    draw1(n)
    draw2(n)
}

//20
function draw1(n){
    let num = ''
    let count = 0
    for(let row = n;row >= 1;row--){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            count = count +1
            num = num + count
            
            
        }


    }
    console.log(num);
    num = ''

}

}


function draw2(n){
    let num = ''
    let count = n/2*(1+n)
    for(let row = 2;row <= n;row++){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            count = count+1
            num = num + count
        }


    }
    console.log(num);
    num = ''

}

}
function draw3(n){
    draw1(n)
    draw2(n)
}

//21


function draw(n){
    let num = ''
    let count = 0
    for(let row = n;row >= 1;row--){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    for(let col = n-1;col > 0;col--){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    console.log(num);
    num = ''

}

}

//22


function draw(n){
    let num = ''
    let count = 0
    for(let row = 1;row <= n;row++){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    for(let col = n-1;col >= 1;col--){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }


    console.log(num);
    num = ''

}

}

//23


function draw1(n){
    let num = ''
    let count = 0
    for(let row = n;row >= 1;row--){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    for(let col = n-1;col > 0;col--){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    console.log(num);
    num = ''

}

}



function draw2(n){
    let num = ''
    let count = 0
    for(let row = 2;row <= n;row++){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }
    for(let col = n-1;col >= 1;col--){
   
        if(row > col){
            num = num + "_"
        } else {
            num = num + "*"
        }


    }


    console.log(num);
    num = ''

}

}

function draw(n){
    draw1(n)
    draw2(n)
}

//24


function draw1(n){
    let num = ''
    let count = 0
    for(let row = n;row >= 1;row--){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            count = count + 1
            num = num + count
        }


    }
    for(let col = n-1;col > 0;col--){
   
        if(row > col){
            num = num + "_"
        } else {
            count = count + 1
            num = num + count
        }


    }
    console.log(num);
    num = ''

}

}



function draw2(n){
    let num = ''
    let count = n*n
    for(let row = 2;row <= n;row++){
    for(let col = 1;col <= n;col++){
   
        if(row > col){
            num = num + "_"
        } else {
            count = count + 1
            num = num + count
        }


    }
    for(let col = n-1;col >= 1;col--){
   
        if(row > col){
            num = num + "_"
        } else {
            count = count + 1
            num = num + count
        }


    }


    console.log(num);
    num = ''

}

}

function draw(n){
    draw1(n)
    draw2(n)
}
