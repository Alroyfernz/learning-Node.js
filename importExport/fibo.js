const kthsmallest = (arr, k) => {
  arr.sort();
  return arr[k - 1];
};
const sum = (arr) => {
  var res = 0;
  arr.map((value) => {
    res += value;
  });
  return res;
};

module.exports = { kthsmallest, sum };
