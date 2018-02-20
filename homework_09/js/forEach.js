function forEach(array, callback) {
  for (let k in array) {
    callback(array[k]);
  }
}

forEach([3,5,2], function(el) {
  console.log(el);
});
