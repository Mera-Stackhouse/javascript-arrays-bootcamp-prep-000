//var chocolateBars = new Array();

var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}