/**DEEP COMPARISON */
// Write a function deepEqual that takes two values and 
// returns true only if they are the same value or are
// objects with the same properties, where the values of
// the properties are equal when compared with
// a recursive call to deepEqual

function deepEqual( obj1, obj2 ) {
    // Check if both values are equivalent
    if( obj1 === obj2 ) return true;
    
    if( obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object" ) return false;
  
    var propsObj1 = 0, propsObj2 = 0;
  
    for( var prop in obj1 )
      propsObj1++;
  
    for( var prop in obj2 ) {
      propsObj2++;
  
      if( !(prop in obj1) || !deepEqual( obj1[prop], obj2[prop] ) )
        return false;
    }
    
    return propsObj1 === propsObj2;
  }
  
  var obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));

  console.log(deepEqual(obj, {here: 1, object: 2}));

  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
