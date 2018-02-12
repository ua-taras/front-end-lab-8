var a = Number(prompt('Input first side of triangle'));
var b = Number(prompt('Input second side of triangle'));
var c = Number(prompt('Input third side of triangle'));

if ((a <= 0) || (b <= 0) || (c <= 0) || isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log('Incorrect data!');
}
else {
  if ((a+b < c) || (a+c < b) || (b+c < a)) {
    console.log('Incorrect data!');
  }
  else {
    if ((Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)) ||
    (Math.pow(a,2) + Math.pow(c,2) == Math.pow(b,2)) ||
    (Math.pow(b,2) + Math.pow(c,2) == Math.pow(a,2))) {
      var triangle_type = 'Type of triangle is right triangle';
    }
    else if ((a == b) & (a == c)) {
      var triangle_type = 'Type of triangle is equilateral';
    }
    else if ((a == b) || (a == c) || (b == c)) {
      var triangle_type = 'Type of triangle is isosceles';
    }
    else if ((a!=b) & (a!=c) & (b!=c)) {
      var triangle_type = 'Type of triangle is scalene';
    }
    var p = (a + b + c)/2;
    var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(triangle_type + ' and square is ' + (s = Number.isInteger(s) ? s : s.toFixed(2)));
  }
}
