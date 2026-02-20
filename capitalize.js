export function capitalize(capMe) {
  let bigFirstLetter = capMe.charAt(0).toUpperCase();
  let otherLetters = capMe.substring(1);
  
  const capitalizedWord = bigFirstLetter + otherLetters;
  return capitalizedWord;
}