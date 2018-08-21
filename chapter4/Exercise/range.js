/** THE SUM OF RANGE */


/**
 * Write a range function that takes two arguments, 
 * start and end, and returns an array containing all the
 * numbers from start up to (and including) end.
 */
const range= (start, end) =>{
    let result = [];
    for (let i = start; i <= end; i ++ ){
        result.push(i);
    }
    return result;
}

/** 
 * Next, write a sum function that takes 
 * an array of numbers and returns 
 * the sum of these numbers. */

const sum = (numbers) =>{
    var arrayTotal = 0;
  
  numLoops = numbers.length;
 
  for ( var i = 0; i < numLoops; i ++ ) {
    arrayTotal += numbers[i];
  }
 
  return arrayTotal;
    }

/** 
 * As a bonus assignment, modify your range function
 * to take an optional third argument that indicates 
 * the “step” value used when building the array.
 * If no step is given, the elements go up by 
 * increments of one, corresponding to the old 
 * behavior. The function call range(1, 10, 2) 
 * should return [1, 3, 5, 7, 9]. Make sure it also
 * works with negative step values so that
 * range(5, 2, -1) produces [5, 4, 3, 2]. */

// range2 function
function range2( start, end, increment ) {
  
  // create the result array
  var result = [];
  
  // test to see if we have an increment, otherwise set it to 1
   // calculate the number of times to loop.
  if ( increment == undefined ){
    increment = 1;
    numLoops = Math.abs( (end - start)/ increment ) + 1;
}else if (!(increment == undefined)){
    numLoops = Math.abs( (end - start)/ increment );
}

  for ( var i = 0; i < numLoops; i ++ ) {
  
    // add (push) the value of start to the array
    result.push( start );
    
    // increment the value of start
    start += increment;
  }
  
  // return the array with all the things in it
  return result;
}

console.log(range (1, 10));
console.log(sum(range(1, 10)));
console.log(range2(1, 10, -1));

