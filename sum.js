const theSum = (num1 = 45, num2) => {
  return num1 + (num2 || null);
};

module.exports = theSum;
