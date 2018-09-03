/**
 * RETRY
 * Say you have a function primitiveMultiply that in 20
 * percent of cases mul- tiplies two numbers and in
 * the other 80 percent of cases raises an exception of 
 * type MultiplicatorUnitFailure. Write a function that 
 * wraps this clunky function and just keeps trying until 
 * a call succeeds, after which it returns the result.
 * Make sure you handle only the exceptions you are trying to handle.
 */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {

    let randomnumber = Math.random();
  if (randomnumber < 0.1149856190123651) {

    console.log(randomnumber);
    return a * b; 
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {

  //This forever loop will keep retryinga s long 
  //as the program can keep on generating random value
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {

      if( !(e instanceof MultiplicatorUnitFailure)){
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(8, 8));