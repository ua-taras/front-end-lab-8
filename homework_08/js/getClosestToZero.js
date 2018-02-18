function getClosestToZero() {
  valueClosestToZero = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (Math.abs(valueClosestToZero, 0) > Math.abs(arguments[i], 0)) {
      valueClosestToZero = arguments[i];
    }
  }
  return valueClosestToZero;
}
