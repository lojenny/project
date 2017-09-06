// Function signature
// The arguments that a function takes and count the characters.

// Function contract
// Takes a string and count the letters then return in object.

// Side-effects:
// no side effect

// Function signature
// name: countLetters
// arguments: a string
// return: object

function countCharactersTypes(str) {
  var strNoSpace = str.replace(/ /g,'');
  var output = {};
  // for (var i in str) {
  for (var i = 0; i < strNoSpace.length; i++) {
    var char = strNoSpace[i];
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
}

// console.log(countCharactersTypes(''));
console.log(countCharactersTypes('a apple'));
