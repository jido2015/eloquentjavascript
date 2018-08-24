/** 
 * EVERYTHING
 * Implement every as a function that takes 
 * an array and a predicate function as
 * parameters. Write two versions, one using
 * a loop and one using the some method.
 */

let predicate =(n) => {
  return n < 10;
  }
let every = (array) =>{
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

let every2 = (array) =>{
  return array.some(element => predicate(element));
}

console.log(every([1, 3, 5]));
// → true
console.log(every([2, 4, 16]));
// → false
console.log(every([]));
// → true