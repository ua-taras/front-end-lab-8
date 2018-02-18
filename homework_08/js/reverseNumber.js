function reverseNumber(value) {
  let sign = 1;
  if (value < 0) {
    value *= -1;
    sign = -1;
  }
  let str_value = value.toString();
  let str_reverse = str_value.split("").reverse().join("");
  return Number(str_reverse) * sign;
}
