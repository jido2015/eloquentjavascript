/** 
 * Chessboard
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 *     # # # #
 *    # # # # 
 *     # # # #
 *    # # # # 
 *     # # # #
 *    # # # # 
 *     # # # #
 *    # # # # 
 */

var row = " # # # #";
var column = "# # # # ";
var size = 8;

for (let counter = 0; counter <size; counter++ ){

    if(counter % 2 ===0){
        console.log(row);
    }else{
        console.log(column);
    }
}