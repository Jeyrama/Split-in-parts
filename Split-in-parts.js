/*
The aim of this challenge is to split a given 
string into different strings of equal size
(note size of strings is passed to the method).

Example:
Split the below string into other strings of size #3:
'supercalifragilisticexpialidocious'

This will return a new string:
'sup erc ali fra gil ist ice xpi ali doc iou s'

Assumptions:
String length is always greater than 0.
String has no spaces..
Size is always positive
*/


// Solution

let splitInParts = function(s, partLength){
  let parts = [];
  let array = s.split('');
  while(array.length) {
  	parts.push(array.splice(0,partLength).join(''));
  }
  return parts.join(' ');
}

// or

const partSplitter = (s, partLength) => 
  s.match(new RegExp(`.{1,${ partLength }}`, 'g')).join(' ');