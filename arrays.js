var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  const arr = array;
  return arr.unshift(element);
}