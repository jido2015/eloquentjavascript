/**
 * RERECURSION
 * @param {*} positveNumber 
 * Define a recursive function isEven corresponding to this description. 
 * The function should accept a single parameter (a positive, whole number) and return a Boolean.
 *  Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to  x this?
 */

function isEven(positveNumber){

    positveNumber = Math.abs(positveNumber-2);

    if(positveNumber ==0){
        return true;
    }else if (positveNumber ==1 ){
        return false;
    }else{
        return isEven(positveNumber);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));