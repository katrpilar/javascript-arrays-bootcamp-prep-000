var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arry,val){
  return [val, ...arry];
}

function destructivelyAddElementToBeginningOfArray(arry,val){
  const arry = [val, ...arry];
  return arry;
}