/**
 * Write two functions, reverseArray and reverseArrayInPlace. 
 * The  rst, reverseArray, takes an array as argument and produces 
 * a new array that has the same elements in the inverse order.
 */
const reverseArray = (arguments) =>{
    let result = [];

    // calculate the length of the array
    let countArray  = arguments.length;
    // loop that many times and swap the first and last elements
    for (let i =countArray -1; i >= 0; i--){

        //push elements into another array
        result.push(arguments[i])
    }
    return result;
}

/**
 * The second, reverseArrayInPlace,
 * does what the reverse method does:
 * it modi es the array given as argument 
 * by reversing its elements.} arguments 
 **/
const reverseArrayInPlace = (arrayToInvert) =>{

    // calculate the length of the array
   let countArray = arrayToInvert.length;
    
    // now calculate the half
    numLoops = Math.floor( countArray / 2 );
   
    // loop that many times and swap the first and last elements
    for ( i = 0; i < numLoops; i++ ) {
      // hold on to the current number
      let holdNum = arrayToInvert[i];
  
      // get the position of the swap number
      let swapPos = countArray - 1 - i;
     // console.log(swapPos); 
      // replace the current number with the swap number
      arrayToInvert[i] = arrayToInvert[swapPos];
      // put the hold number into the swap number
      arrayToInvert[swapPos] = holdNum;

    }

    // return the inverted array
    return arrayToInvert;
  }
  

  //call to functions
let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArray(arrayValue)); 
console.log(reverseArrayInPlace(arrayValue)); 