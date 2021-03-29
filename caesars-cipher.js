//ROT13 -> The values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

const shiftChar = (char) => { //get char in string format
  const [min, max] = ["A".charCodeAt(0), "Z".charCodeAt(0)]; //get ascii of upper and lower limit
  const res = (char.charCodeAt(0) + 13 - min) % (max - min + 1) + min; //have the index in this range and return to min when exceeds the upper limit and so on
  return String.fromCharCode(res); //convert ascii char to string
}

const rot13 = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i); //get char in that index
    newStr += /[A-Z]/.test(char) ? shiftChar(char) : char;  //if A to Z shift the char otherwise do not change it (add the same char in the string)
  }
  return newStr;
}