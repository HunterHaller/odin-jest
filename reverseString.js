export function reverseString(reverseMe) {
    //Split string into array of letters,
    //reverse the order of the array,
    //then join all array elements together again.
    //https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    
    return reverseMe.split("").reverse().join("");
}