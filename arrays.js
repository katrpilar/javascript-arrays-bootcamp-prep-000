var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element){
  const v2 = element;
  return array.unshift(v2);
}