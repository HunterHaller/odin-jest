//Shift all letters to the 'right' in alphabetical order by the "key" number.
//Preserve punctuation and capitalization!

const normalAlphaArray = "abcdefghijklmnopqrstuvwxyz".split('');

function makeCipher(key) {

    let cipherArray = normalAlphaArray.slice(); //create a copy array

    for (let i = 0; i < key; i++) {
        //Remove the front letter and store it:
        //let shiftedLetter = cipherArray.shift();

        //Place the shifted letter at the back of the array:
        //cipherArray.push(shiftedLetter);
        
        cipherArray.push(cipherArray.shift());
    }

    return cipherArray;
}

export function caesarCipher(text, key) {
    let textArray = text.split('');

    let cipherArray = makeCipher(key);

    for (let i = 0; i < text.length; i++) { //For each character to be encrypted,

        if (cipherArray.includes(textArray[i].toLowerCase())) { //check if it's a letter.
            if (textArray[i] == textArray[i].toUpperCase()){ //if it's uppercase,

                let letterIndex = normalAlphaArray.indexOf(textArray[i].toLowerCase());

                textArray[i] = cipherArray[letterIndex].toUpperCase(); //insert the uppercase cipher letter.
            } else { //otherwise,
       
                let letterIndex = normalAlphaArray.indexOf(textArray[i]);
        
                textArray[i] = cipherArray[letterIndex]; //insert the standard (lowercase) cipher letter.
            }
        } else {
            //Character is NOT alphabetic, so leave as is!
            //Nothing to do.
        }
    }

    return textArray.join('');;
}