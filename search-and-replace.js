//Str: string to change. Before: word to be replace After: word to replace the before. You must remain the original case of before word.
function myReplace(str, before, after) {
  let arr = str.split(" ");
  const index = arr.indexOf(before);
  if (before.charAt(0).toUpperCase() === before.charAt(0)) { //before first char is uppercase check
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1)
  }
  arr.splice(index,1,after); //delete item from index for 1 index and add the after (after being modified with the case needed)in its place
  return arr.join(" ");
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));