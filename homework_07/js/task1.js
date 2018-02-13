
var n = Number(prompt('Input n:'));

if ((n > 0) & (n <= 20) & (Number.isInteger(n))) {
  console.log('Right!');
  var pyramid = '';
  var pyramid_width = (n * 2) + 1;
  var pyramid_tylde = '[~]';
  var pyramid_space = '   ';
  var n_tylde = 1, j_tylde = 1;
  var n_space = 0, n_halfspace = 0;

  for (let i = 1; i <= n; i++) {
    n_space = pyramid_width - n_tylde;
    n_halfspace = n_space / 2;

    while (n_halfspace > 0) {
      pyramid += pyramid_space;
      n_halfspace--;
    }
    while (j_tylde > 0) {
      pyramid += pyramid_tylde;
      j_tylde--;
    }

    pyramid += '\n';
    n_tylde += 2;
    j_tylde = n_tylde;
  }

  console.log(pyramid);
}

else {
  console.error('Incorrect!');
}
