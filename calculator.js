function createCalculator() {
  let value = 0;
  return {
    set: function (newValue) {
      value = newValue;
      return value;
    },
    add: function (newValue) {
      value += newValue;
      return value;
    },
    mult: function (newValue) {
      value *= newValue;
      return value;
    },
    sub: function (newValue) {
      value -= newValue;
      return value;
    },
    div: function (newValue) {
      value /= newValue;
      return value;
    },
  };
}

export const calculator = createCalculator();
