var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arry,val){
  return [val, ...arry];
}

function destructivelyAddElementToBeginningOfArray(arry,val){
  const v2 = val
  arry = [val, ...arry];
  return arry;
}