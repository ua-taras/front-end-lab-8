function increment(el) {
  return el + 1;
}

function getTransformedArray(array, callback) {
  let TransformedArray = [];
  forEach(array, function (el) {
    TransformedArray.push(callback(el));
  });
  return TransformedArray;
}

console.log(getTransformedArray([1, 7, 20], increment));
