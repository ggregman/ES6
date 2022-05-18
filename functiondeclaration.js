console.log(hoisted());

function hoisted(){
    return "hoisted";
}

// console.log(hoistedExpFunc()); non funziona perchè devo prima dichiarare la funzione (essendo una const)

const hoistedExpFunc = function(){
    return "hoistedExpFunc";
}

console.log(hoistedExpFunc());