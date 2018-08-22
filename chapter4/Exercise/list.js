/** A LIST */

//Write a function arrayToList that builds up a list 
//structure like the one shown when given [1, 2, 3] as argument.
const arrayToList = array => {
    var list = null;
  
    for( i = array.length-1; i >= 0; i-- )
      list = { value: array[i], rest: list };
  
    return list;
  }

  // Also write a listToArray function that produces an array from a list.
  const listToArray = list =>{
    var array = [];
  
    for( var node = list; node; node = node.rest )
      array.push( node.value );
  
    return array;
  }

  //Then add a helper function prepend, which takes
  // an element and a list and creates a new list
  // that adds the element to the front of the input 
  //list, and nth, which takes a list and a number and 
  //returns the element at the given position in the list 
  //(with zero referring to the  rst element) 
  //or undefined when there is no such element.

  const prepend =(value, rest) =>{
    return {value: value, rest: rest};
  }

  //If you haven’t already, also write a recursive version of nth.
  const nth = (list, n) =>{
    // Simpler solution
    // return listToArray( list )[n];
    // Recursive solution
    if( n === 0 )
      return list.value;
    else
      return nth( list.rest, n - 1 );
  }
  
  console.log(arrayToList([10, 20]));
  console.log(listToArray(arrayToList([10, 20, 30])));
  console.log(prepend(10, prepend(20, null)));
  console.log(nth(arrayToList([10, 20, 30]), 1));
