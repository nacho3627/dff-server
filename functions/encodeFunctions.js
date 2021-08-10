function encode(number) {
  return ((number + 1) * 256512) / 12 + 2222;
};

function decode(code) {
  return ((code - 2222) * 12 / 256512) - 1;
};

module.exports = {encode, decode};
