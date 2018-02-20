function predicateFunction(num) {
  return num > 3;
}

function getFilteredArray(array, callback) {
  let FilteredArray = [];
  forEach(array, function(el) {
    if (callback(el)) {
      FilteredArray.push(el);
    }
  });
  return FilteredArray;
}

console.log(getFilteredArray([1, 7, 20], predicateFunction));
