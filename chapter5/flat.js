/**FLATTENING
 * Use the reduce method in combination with
 * the concat method to “ atten” an array of 
 * arrays into a single array that has all the
 * elements of the original arrays.
 */

let arrays = [[1, 2, 3], [4, 5], [6]];
function concatenate_arrays(flat, new_value) {
 
  return flat.concat(new_value);
}

// [] as a callback function which get the 
//array of data returned by 'concatenate_arrays'
console.log(arrays.reduce(concatenate_arrays, []));
