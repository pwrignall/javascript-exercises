const ftoc = function (temp) {
  let convertedTemp = (temp - 32) * (5 / 9);
  return Math.round(convertedTemp * 10) / 10
}

const ctof = function (temp) {
  let convertedTemp = temp * (9 / 5) + 32;
  return Math.round(convertedTemp * 10) / 10
}

module.exports = {
  ftoc,
  ctof
}
