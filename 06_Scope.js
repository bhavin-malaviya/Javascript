let a = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);


//  Global Socpe Are differences between node and windows.


function one() {
    const userName = "Bhavin"

    function two(){
        const wbsites = "youtube"
        console.log(userName);
    }
    // console.log(wbsites);      /* this one not accessible because its out scope*/

    two();
    
}

// one();
 

if(true){
    const userName = "Bhavin";
    if(true){
        const websites = " youtube";
        console.log(userName + websites);
    }

    // console.log(wbsites);  /* this one not accessible because its out of if statement*/
    
}

// console.log(userName);  /* this one not accessible because its out of if statement*/



// ----------------------------------------------------------------------------------------------------------


console.log(addone(5));
function addone(num){
    return num + 1;
}

//  if function store in variables that you can not access in front of the function

console.log(addTwo(5));
const addTwo = function(num) {
    return num + 2;
}

