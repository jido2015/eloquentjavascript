/** Regexp golf
 * For each of the following items, write a regular 
 * expression to test whether any of the given substrings 
 * occur in a string. The regular expression should 
 * match only strings containing one of the substrings 
 * described. 
 */

let car = "car and cat"
console.log(/ca[rt]/.exec(car));

console.log(/pr?op/.exec("pop and prop"));

console.log(/ferr(et|y|ari)/.exec("ferret, ferry, and ferrari"));

console.log(/\w+ious\b/.exec("Lol... i mean you are judicious"))

console.log(/\s[.,:;]/.test("lol... let me see hell yeah"));

console.log(/\w{7,}/.exec("let me see your hand writting"));

console.log(/\b[a-df-z]+\b/.test("87878334"));
