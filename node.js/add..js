const assert = require(`assert`);
const { stdin } = require("process");

function add(a, b) {
  return a + b;
}

describe(`parameter type`, () => {});

assert(add(2, 3) === 5, `failed`);
assert(add(2) === 5, `failed it is null value for b`);
assert(add(`dummy`, 3) === 5, `you dummy`);
