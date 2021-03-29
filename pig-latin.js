/*
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {
  let newStr;
  if (/[aeiou]/.test(str[0])) { //first letter of str is vowel
    newStr = str.slice();
    newStr += 'w'; //add w to the end of str
  } else { //is consonant
    let item = str.match(/^[^aeiou]+/); //get all the string of consonants at the start of the string to add it at the end
    newStr = str.slice(item[0].length);  //slice array fromthe first vowel to the end
    newStr+=item; //add the consonants string to the end
  }
  newStr+='ay'; //generalize the ay and add it to the end of both conditions
  console.log(newStr);
  return newStr;
}

translatePigLatin("glove");