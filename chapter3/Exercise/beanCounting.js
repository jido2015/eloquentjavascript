
/**BEAN COUNTING */

  function countChar(str, chr) {
    var counter = 0
    for (var i = 0; i < str.length; i++) {

        //If capital letter found, increment counter, 
        //and keep checking until loop ends(no more letter to check)
      if (str.charAt(i) === chr) {
          counter++;
        }
    }
    return counter;
  }

  //Function that uses function counthar(args1, arg2).
  function countBs(str) {
    return countChar(str, 'B');
  }


console.log(countBs("BannaBoy"));